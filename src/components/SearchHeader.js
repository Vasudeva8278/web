import React, { useEffect, useState } from 'react';
import DesignTemplate from './DesignTemplate';
import NeoModal from './NeoModal';
import GenerateDocument from './GenerateDocument';
import { FaMagic, FaSearch, FaPenNib } from "react-icons/fa";
import bannerImage from "../Assets/banner2.png";

const SearchHeader = ({ projectId, hasProject = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayPage, setDisplayPage] = useState("");
  const [selectedProject, setSelectedProject] = useState(projectId || '');

  const handleDesignTemplates = () => {
    setDisplayPage('designTemplates');
    setIsModalOpen(true);
  };

  const handleGenerateDocs = () => {
    setDisplayPage('generateDocs');
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (projectId) {
      setSelectedProject(projectId);
    }
  }, [projectId]);

  return (
    <div className="w-full px-4 md:px-8 py-6 bg-gray-50">
      {/* Search input */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search templates or documents"
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition duration-200"
            aria-label="Search templates or documents"
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Banner with overlay content */}
      <div className="relative max-w-7xl mx-auto mb-8">
        <div
          className="h-48 md:h-64 rounded-xl border-4 border-white overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="h-full flex flex-col justify-center px-6 bg-black bg-opacity-40 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Revolutionize Document Management<br />
              <span className="text-teal-300 font-semibold">
                with Automation
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="max-w-7xl mx-auto flex justify-end px-4 md:px-8 mb-8">
        <div className="flex gap-4 flex-wrap justify-end">
          <button
            onClick={handleDesignTemplates}
            className="flex items-center bg-white text-blue-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-50 active:scale-95 transition duration-150"
          >
            <FaPenNib className="mr-2" />
            Design Template
          </button>
          <button
            onClick={handleGenerateDocs}
            className="flex items-center bg-white text-green-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-green-50 active:scale-95 transition duration-150"
          >
            <FaMagic className="mr-2" />
            Generate Documents
          </button>
        </div>
      </div>

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
