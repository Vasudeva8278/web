import React, { useState, useContext } from "react";
import { motion } from 'framer-motion';
import NeoProject from "./NeoProject";
import NeoModal from "../components/NeoModal";
import ProjectCards from "../components/Project/ProjectCards";
import SearchHeader from "../components/SearchHeader";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPlus, FaProjectDiagram } from "react-icons/fa";
import { ProjectContext } from "../context/ProjectContext";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState({});
  const { projects } = useContext(ProjectContext);

  const handleSave = (updatedProject) => {
    setIsModalOpen(false);
  };

  const handleEdit = (project) => {
    setProject(project);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setProject("");
    setIsModalOpen(false);
  };

  const handleCreateProject = () => {
    setProject({});
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-1">Manage and organize your document projects</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button
              variant="primary"
              size="lg"
              icon={<FaPlus />}
              onClick={handleCreateProject}
            >
              Create Project
            </Button>
          </div>
        </motion.div>

        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SearchHeader />
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaProjectDiagram className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{projects.length}</h3>
                <p className="text-gray-600">Total Projects</p>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Your Projects</h2>
            <p className="text-gray-600">Click on a project to view its templates and documents</p>
          </div>
          
          <ProjectCards projects={projects} onEdit={handleEdit} />
        </motion.div>

        {/* Modal */}
        <NeoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <NeoProject
            mode={project._id ? "edit" : "add"}
            project={project}
            onSave={handleSave}
            handleClose={handleCancel}
          />
        </NeoModal>
      </div>
    </Layout>
  );
};

export default Projects;