import React, { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  FaHome,
  FaBuilding,
  FaUser,
  FaSignOutAlt,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegFolderOpen,
  FaDotCircle,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiLayout4Line } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import photo from "../Assets/general_profile.png";
import NeoModal from "./NeoModal";
import NeoProject from "../pages/NeoProject";
import Inbox from "./Inbox";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const isProjectActive = (projectId) => location.pathname === `/projects/${projectId}`;

  const handleProjects = () => {
    navigate(`/projects`);
  };

  const handleClients = () => {
    navigate("/clients");
  };

  const handleTemplates = () => {
    navigate(`/Neo`);
  };

  const gotoHome = () => {
    navigate("/projects");
  };

  const handleProjectsTemplates = (project) => {
    navigate(`/projects/${project._id}`, { state: { data: project } });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    navigate(`/projects`);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  // Helper function to render navigation items
  const NavItem = ({ to, onClick, icon: Icon, label, projectSpecific = false, projectId = null }) => {
    const active = projectSpecific
      ? isProjectActive(projectId)
      : isActive(to) || (to === "/projects" && location.pathname.startsWith("/projects/") && !projectId);

    return (
      <li className="w-full flex justify-center"> {/* Centering within the 20px width */}
        <div
          onClick={onClick || (() => navigate(to))}
          className={`
            flex flex-col items-center p-2 rounded-lg cursor-pointer w-full
            hover:bg-blue-100 transition duration-200
            ${active ? "shadow-md shadow-blue-300 bg-blue-50" : ""}
          `}
        >
          <Icon className={`w-5 h-5 mb-1 ${active ? "text-blue-600" : "text-gray-700"}`} />
          <span className={`text-xs font-semibold text-center ${active ? "text-blue-600" : "text-gray-700"}`}>
            {label}
          </span>
        </div>
      </li>
    );
  };

  return (
    <div className='flex h-full'>
      <div className='relative border-r border-gray-300 flex flex-col w-20 bg-gray-100'>
        {/* User Profile Section */}
        <div className='flex flex-col items-center w-full py-4 border-b border-gray-300'>
          <img
            src={user?.profilePic || photo}
            alt='Profile'
            className='w-12 h-12 rounded-full mb-2 cursor-pointer border-2 border-transparent hover:border-blue-400 transition-colors duration-200'
            onClick={handleProfileClick}
          />
          <div className='text-center text-gray-800'>
            <div className='text-sm font-semibold truncate w-full px-1'>{user.name}</div>
            <div className='text-xs text-gray-600'>{user.role}</div>
          </div>
          <MdArrowDropDown className='w-6 h-6 mt-2 text-gray-600' />
        </div>

        {/* Main Navigation Items */}
        <nav className='py-4 flex flex-col items-center space-y-4'>
          <ul className='w-full flex flex-col items-center space-y-2'>
            <NavItem to="/projects" onClick={gotoHome} icon={GoHome} label="Home" />

            <li className="w-full flex flex-col items-center">
                <div
                    onClick={handleProjects}
                    className={`
                        flex flex-col items-center p-2 rounded-lg cursor-pointer w-full
                        hover:bg-blue-100 transition duration-200
                        ${isActive("/projects") && !location.pathname.startsWith("/projects/") ? "shadow-md shadow-blue-300 bg-blue-50" : ""}
                    `}
                >
                    <FaRegFolderOpen className={`w-5 h-5 mb-1 ${isActive("/projects") && !location.pathname.startsWith("/projects/") ? "text-blue-600" : "text-gray-700"}`} />
                    <span className={`text-xs font-semibold text-center ${isActive("/projects") && !location.pathname.startsWith("/projects/") ? "text-blue-600" : "text-gray-700"}`}>
                        Projects
                    </span>
                </div>
                <div
                    className='mt-1 cursor-pointer hover:text-blue-600 transition-colors duration-200'
                    onClick={() => setIsModalOpen(true)}
                    title='Add new Project'
                >
                    <IoIosAddCircleOutline className='w-5 h-5 text-gray-600 hover:text-blue-600' />
                </div>
            </li>




            <NavItem to="/clients" onClick={handleClients} icon={HiOutlineUserGroup} label="Clients" />
            <NavItem to="/Neo" onClick={handleTemplates} icon={RiLayout4Line} label="Template" />

            {/* Admin/SuperAdmin specific features */}
            {user && user?.features?.includes("viewDashboard") && (
              <NavItem to="/dashboard" icon={FaHome} label="Dashboard" />
            )}
            {user && user?.features?.includes("viewOrganizations") && (
              <NavItem to="/organizations" icon={FaBuilding} label="Organizations" />
            )}
            {user && user?.features?.includes("viewProfile") && (
              <NavItem to="/profile" icon={FaUser} label="Profile" />
            )}
          </ul>
        </nav>

        {/* Logout Section at the bottom */}
        <div className='w-full py-4 border-t border-gray-300 flex justify-center'>
          <div
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className='flex flex-col items-center p-2 rounded-lg cursor-pointer w-full hover:bg-blue-100 transition duration-200'
          >
            <FaSignOutAlt className='w-5 h-5 mb-1 text-gray-700' />
            <span className='text-xs font-semibold text-center text-gray-700'>Logout</span>
          </div>
        </div>

        {/* Modal for New Project */}
        <NeoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <NeoProject
            mode={"add"}
            project={""}
            onSave={handleSave}
            handleClose={handleCancel}
          />
        </NeoModal>
      </div>
      <div className='flex-1'>
        <Inbox />
      </div>
    </div>
  );
};

export default Navigation;