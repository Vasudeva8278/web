import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DesignTemplate from './DesignTemplate';
import NeoModal from './NeoModal';
import GenerateDocument from './GenerateDocument';
import { FaMagic, FaSearch, FaPenNib, FaPlus } from "react-icons/fa";
import Button from './UI/Button';
import bannerImage from "../Assets/banner2.png";

const SearchHeader = ({ projectId, hasProject = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayPage, setDisplayPage] = useState("");
  const [selectedProject, setSelectedProject] = useState(projectId || '');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDesignTemplates = () => {
    setDisplayPage('designTemplates');
    setIsModalOpen(true);
  };

  const handleGenerateDocs = () => {
    setDisplayPage('generateDocs');
    setIsModalOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    if (projectId) {
      setSelectedProject(projectId);
    }
  }, [projectId]);

  return (
    <div className="w-full px-4 md:px-8 py-6 bg-gray-50">
      {/* Search input */}
      <motion.div 
        className="max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search templates, documents, or projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all shadow-sm hover:shadow-md"
            aria-label="Search templates or documents"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="absolute right-2 top-2"
          >
            Search
          </Button>
        </form>
      </motion.div>

      {/* Banner with overlay content */}
      <motion.div 
        className="relative max-w-7xl mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div
          className="h-48 md:h-64 rounded-2xl border-4 border-white overflow-hidden shadow-xl relative"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-2xl" />
          <div className="relative h-full flex flex-col justify-center px-8 md:px-12">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Revolutionize Document Management
              <br />
              <span className="text-teal-300 font-bold">
                with Automation
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-200 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Automate document management to boost efficiency, reduce errors, and focus on strategic goals.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div 
        className="max-w-7xl mx-auto flex justify-center md:justify-end px-4 md:px-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex gap-4 flex-wrap justify-center md:justify-end">
          <Button
            onClick={handleDesignTemplates}
            variant="secondary"
            size="lg"
            icon={<FaPenNib />}
            className="shadow-md hover:shadow-lg"
          >
            Design Template
          </Button>
          <Button
            onClick={handleGenerateDocs}
            variant="success"
            size="lg"
            icon={<FaMagic />}
            className="shadow-md hover:shadow-lg"
          >
            Generate Documents
          </Button>
        </div>
      </motion.div>

      {/* Modal for Templates/Docs */}
      <NeoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {displayPage === 'designTemplates' ? (
          <DesignTemplate onClose={() => setIsModalOpen(false)} value={selectedProject} hasProject={hasProject} />
        ) : (
          <GenerateDocument onClose={() => setIsModalOpen(false)} value={selectedProject} hasProject={hasProject} />
        )}
      </NeoModal>
    </div>
  );
};

export default SearchHeader;