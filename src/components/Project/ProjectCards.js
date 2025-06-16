import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaEdit, FaEllipsisV, FaFolder, FaPlus } from 'react-icons/fa';
import Button from '../UI/Button';
import Card from '../UI/Card';
import thumbnailImg from '../../Assets/thumbnail.png';

const ProjectCard = ({ project, thumbnail, onEdit }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleEditProject = () => {
    setMenuOpen(false);
    onEdit(project);
  };

  const viewTemplates = (project) => {
    navigate(`/projects/${project._id}`, { state: { data: project } });
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="relative overflow-hidden group cursor-pointer" 
        style={{ width: '280px', height: '350px' }}
        onClick={() => viewTemplates(project)}
      >
        {/* Menu Button */}
        <div className="absolute top-3 right-3 z-10" ref={menuRef}>
          <Button
            variant="ghost"
            size="sm"
            icon={<FaEllipsisV />}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm"
          />
          
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                  onClick={handleEditProject}
                  whileHover={{ x: 4 }}
                >
                  <FaEdit className="h-4 w-4 text-blue-500" />
                  Edit Project
                </motion.button>
                <motion.button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                  onClick={() => viewTemplates(project)}
                  whileHover={{ x: 4 }}
                >
                  <FaFileAlt className="h-4 w-4 text-green-500" />
                  View Templates
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Thumbnail */}
        <div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
          {thumbnail ? (
            <img
              src={`data:image/png;base64,${thumbnail}`}
              alt={project.projectName}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <FaFolder className="w-16 h-16 text-blue-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">
            {project.projectName}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Project</span>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectCards = ({ projects, onEdit }) => {
  if (!projects || projects.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaFolder className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
        <p className="text-gray-500 mb-6">Get started by creating your first project</p>
        <Button variant="primary" icon={<FaPlus />}>
          Create Project
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard
            project={project}
            thumbnail={project.thumbnail}
            onEdit={onEdit}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCards;