import React, { useState, useRef, useEffect, useCallback } from "react";
import { MdKeyboardArrowDown, MdArrowDropDown } from "react-icons/md";
import { RiMenuFill, RiLayout4Line } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import {
  FaUpload,
  FaFileAlt,
  FaRegFolderOpen,
  FaDownload,
  FaTrash,
  FaMagic,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import CanvasThumbnails from "./CanvasThumbnails";
import { getTemplatesByProjectId } from "../services/templateApi";

import * as docx from "docx-preview";
import TemplateCards from "./Template/TemplateCards";
import axios from "axios";
import {
  createTemplate,
  deleteTemplate,
} from "../services/templateApi";
import {
  deleteDocument,
  downloadDocument,
  getHomePageDocuments,
} from "../services/documentApi";
import SearchHeader from "./SearchHeader";
import ViewTemplatesHighlights from "./Template/ViewTemplatesHighlights";
import NeoModal from "./NeoModal";

const NeoProjectTemplates = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentDocuments, setRecentDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [docTemplates, setDocTemplates] = useState([]);
  const contentRef = useRef(null);
  const location = useLocation();
  const projectData = location.state?.data;

  // Fetch templates from API
  const fetchTemplates = useCallback(async () => {
    if (projectData?._id) {
      try {
        setLoading(true);
        setError(null);
        const response = await getTemplatesByProjectId(projectData._id);
        setDocuments(response);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch templates for this project');
        setLoading(false);
      }
    }
  }, [projectData]);

  // Fetch documents from API
  const fetchDocuments = useCallback(async () => {
    if (projectData?._id) {
      try {
        const response = await getHomePageDocuments(projectData._id);
        const data = response;
        setDocTemplates(data);
      } catch (error) {
        console.error("Failed to fetch documents", error);
      }
    }
  }, [projectData]);

  // Fetch templates and documents when component mounts or projectData changes
  useEffect(() => {
    if (projectData && projectData._id) {
      fetchTemplates();
      fetchDocuments();
    }
  }, [projectData, fetchTemplates, fetchDocuments]);

  // Sort documents by updated time
  useEffect(() => {
    if (documents && documents.length > 0) {
      const sortedData = [...documents].sort((a, b) => {
        if (!a.updatedTime) return 1;
        if (!b.updatedTime) return -1;
        return new Date(b.updatedTime) - new Date(a.updatedTime);
      });
      setRecentDocuments(sortedData);
    }
  }, [documents]);

  // Delete template handler
  const handleDeleteTemplate = async (docId) => {
    console.log(`Deleting `, docId);
    try {
      const response = await deleteTemplate(projectData._id, docId);
      if (response.status === 204) {
        // After successful deletion, refresh the templates
        fetchTemplates();
        alert("Document deleted successfully");
      } else {
        throw new Error(`Failed to delete document.`);
      }
    } catch (error) {
      console.error("Failed to delete document", error);
    }
  };

  // Navigate to highlights view
  const handleGenerateDocs = () => {
    navigate(`/viewAllHighlights`, {
      state: {
        project: projectData,
      },
    });
  };

  // Delete document handler
  const handleDeleteDocument = async (doc_id) => {
    console.log("deleteing document", doc_id);
    const response = await deleteDocument(projectData._id, doc_id);
    if (response) {
      fetchTemplates();
      fetchDocuments();
    }
  };

  // Download document handler
  const handleDocumentDownload = async (docObj) => {
    try {
      const id = docObj._id;
      const fileName = docObj.fileName;
      const response = await downloadDocument(id, fileName);

      const blob = new Blob([response], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName.trim() + ".docx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };

  return (
    <div className='flex'>
      <div className='flex flex-col w-full'>
        <div className='flex text-gray-400 text-xs p-3'>
          {projectData.projectName}
        </div>
        <div className='m-2'>
          <SearchHeader projectId={projectData._id} hasProject={true} />
        </div>
        <div className='flex flex-col p-4 space-y-8'>
          <div className='w-full max-w-5xl'>
            <button
              className='mb-4 bg-white text-green-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-green-100 flex items-center'
              onClick={handleGenerateDocs}
              disabled={documents?.length === 0}
            >
              <FaMagic className='adj' /> Generate Client Documents
            </button>

            <h2 className='text-2xl font-semibold mb-4 text-left'>
              Saved Templates for {projectData.projectName}
            </h2>
            <div className='flex justify-center'>
              {loading && <div>Loading...</div>}
              {error && <div className="text-red-500">Failed to fetch templates. Please try again.</div>}
              {!loading && !error && documents?.length === 0 && (
                <div>No templates found. Please add some templates.</div>
              )}
              <TemplateCards
                documents={documents}
                handleDeleteTemplate={handleDeleteTemplate}
                projectId={projectData?._id}
              />
            </div>
          </div>

          <div className='w-full max-w-5xl'>
            <h2 className='text-2xl font-semibold mb-4 text-left'>
              Documents with Template Names
            </h2>
            <div className='flex justify-center space-x-4'>
              {loading && <div>Loading...</div>}
              <TemplateCards
                projectId={projectData?._id}
                documents={docTemplates}
                template={true}
                handleDeleteTemplate={handleDeleteDocument}
                handleDownload={handleDocumentDownload}
                className='border p-4 rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoProjectTemplates;
