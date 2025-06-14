import React, { useEffect, useState } from 'react';
import DesignTemplate from './DesignTemplate';
import NeoModal from './NeoModal';
import GenerateDocument from './GenerateDocument';
import { FaMagic, FaSearch } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import bannerImage from "../Assets/banner2.png";


const SearchHeader = ({projectId, hasProject = false}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [displayPage, setDisplayPage] = useState("")
    const [isGenerateDocModalOpen, setIsGenerateDocModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projectId || '');

    const handleDesignTemplates = () => {
        setDisplayPage('designTemplates')
        setIsModalOpen(true);
    }
    const handleGenerateDocs = () => {
        setDisplayPage('generateDocs')
        setIsModalOpen(true);
    }
    useEffect(() => {
      if(projectId){
      setSelectedProject(projectId)
        }}, [projectId]);

  return (
    <>
    
    <div className="w-full">
      {/* Search bar at the top */}
      <div className="mb-6 w-full ml-12">
        <div className="relative w-100">
          <input
            type="text"
            placeholder="Search for templates/documents"
            className="w-full p-3 h-11 pl-10 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400 w-5 h-5 transition-colors duration-200" />
          </div>
        </div>
      </div>
      {/* Banner and buttons */}
      <div
        className="flex justify-between items-end w-100 ml-12"
        style={{
          backgroundImage: `url(${bannerImage})`,
          height: '200px',
          borderRadius: '24px',
          border: '4px solid #fff',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <div className="text-white w-1/2">
          <h1 className="text-3xl font-normal banner">
            Revolutionize Document <br />
            <span className="text-teal-200 highlights">
              Management <span className="text-white font-normal">with</span> Automation
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-end w-full mt-4">
        <div className="flex gap-4">
          <button
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 flex items-center transition-all duration-200 active:scale-95"
            onClick={handleDesignTemplates}
          >
            <FaPenNib className="mr-2" /> Design Template
          </button>
          <button
            className="bg-white text-green-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-green-100 flex items-center transition-all duration-200 active:scale-95"
            onClick={handleGenerateDocs}
          >
            <FaMagic className="mr-2" /> Generate Documents
          </button>
        </div>
      </div>
      <NeoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {displayPage === 'designTemplates' ? (
          <DesignTemplate onClose={() => setIsModalOpen(false)} value={selectedProject} hasProject={hasProject} />
        ) : (
          <GenerateDocument onClose={() => setIsModalOpen(false)} value={selectedProject} hasProject={hasProject} />
        )}
      </NeoModal>
    </div>
    </>
  );
};

export default SearchHeader;