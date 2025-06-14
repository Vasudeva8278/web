import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFileAlt, FaEdit, FaDownload, FaTrash, FaEllipsisV } from 'react-icons/fa';
import thumbnailImg from '../../Assets/thumbnail.png'

const Card = ({ project,thumbnail,onEdit }) => {
  const navigate = useNavigate();
 
   const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

 

  const handleEditProject = () => {
    onEdit(project);
  };

  const closeProject = () => {
    console.log("closing project")
  }

  const viewTemplates = (project) => {
    navigate(`/projects/${project._id}`, { state: { data: project } });
    //navigate(`/export/${docId}?projectId=${projectId}`);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col justify-between w-full sm:w-48 md:w-64 relative" style={{ height: '300px' }}>
      <div className="flex justify-end ">
        <div ref={menuRef} className="absolute z-10">
          <button
            className="flex items-center px-2 py-2  mt-1 text-gray-600 rounded hover:bg-gray-300 hover:text-white" style={{fontSize:'14px'}}
            onClick={toggleMenu}
          >
            <FaEllipsisV />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10" style={{fontSize:'14px'}} >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {project && (
                  <button
                    className="flex items-center w-full px-4 py-2 text-gray-500 "
                    onClick={() => handleEditProject(project._id)}
                  >
                    <FaFileAlt className="mr-2" /> Edit Project
                  </button>
                )}
                {project && (
                  <button
                    className="flex items-center w-full px-4 py-2 text-gray-500 "
                    onClick={() => viewTemplates(project)}
                  >
                    <FaFileAlt className="mr-2" /> View Templates
                  </button>
                )}
               
              
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1" id="project-card"  >
         <div
         
          style={{
            height: '200px',
            border: '1px solid #ccc',
            padding: '5px',
            backgroundColor: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
         {/*  dangerouslySetInnerHTML={{ __html: content }} */}
          { thumbnail && (thumbnail!==null ||  thumbnail!=undefined) ? <img  src={`data:image/png;base64,${thumbnail}`}/> : <img src={thumbnailImg}/>}
        </div>
       
        
      </div>
    
      <div className="flex-1 mt-4">
        <div className="text-sm font-semibold mb-2 truncate text-center">{project.projectName}</div>
      </div>
    </div>
  );
};

const ProjectCards = ({ projects, onEdit}) => {
  return (
    <div id="cardContainer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center h-full overflow-y-auto">
      {projects?.map((project) => (
        <Card
          project={project}
          key={project._id}
          projectId={project._id}
          name={project.fileName}
          thumbnail = {project.thumbnail}
          onEdit ={onEdit}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
