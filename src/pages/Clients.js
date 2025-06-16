import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllClients } from "../services/clientsApi";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaFolder, FaEllipsisV, FaSearch, FaUsers } from "react-icons/fa";
import { ProjectContext } from "../context/ProjectContext";
import NeoModal from "../components/NeoModal";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { projects } = useContext(ProjectContext);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getAllClients();
        setClients(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleClientClick = (client) => {
    navigate('/viewclient', { state: { client } });
  };

  const handleCreateClient = (projectData) => {
    navigate('/viewAllHighlights', {
      state: { project: projectData },
    });
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading clients...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-96">
          <Card className="text-center p-8">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Loading Clients</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </Card>
        </div>
      </Layout>
    );
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-600 mt-1">Manage your client portfolio</p>
          </div>
          <Button
            variant="primary"
            icon={<FaUserPlus />}
            onClick={() => setIsModalOpen(true)}
          >
            Add Client
          </Button>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaUsers className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{clients.length}</h3>
                <p className="text-gray-600">Total Clients</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card 
                  className="cursor-pointer group"
                  onClick={() => handleClientClick(client)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <FaFolder className="h-6 w-6 text-blue-500" />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={<FaEllipsisV />}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {client.documents.length} Documents
                    </span>
                    <span className="text-sm text-gray-500">
                      Active
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
              <p className="text-gray-500 mb-6">
                {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first client'}
              </p>
              {!searchTerm && (
                <Button variant="primary" icon={<FaUserPlus />} onClick={() => setIsModalOpen(true)}>
                  Add Client
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Add Client Modal */}
        <NeoModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Add New Client"
          size="sm"
        >
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="projectSelect" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Project
                </label>
                <select
                  id="projectSelect"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                  onChange={(e) => setSelectedProject(e.target.value)}
                  value={selectedProject}
                >
                  <option value="">Choose a project</option>
                  {projects.map((project) => (
                    <option key={project._id} value={JSON.stringify(project)}>
                      {project.projectName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => selectedProject && handleCreateClient(JSON.parse(selectedProject))}
                  disabled={!selectedProject}
                >
                  Create Client
                </Button>
              </div>
            </div>
          </div>
        </NeoModal>
      </div>
    </Layout>
  );
};

export default Clients;