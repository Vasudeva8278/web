import React, { useContext, useState, useRef } from "react";
import * as docx from "docx-preview";
import { useNavigate } from "react-router-dom";
import { createTemplate, uploadTemplate } from "../services/templateApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectContext } from "../context/ProjectContext";

const DesignTemplate = ({ onClose, value, hasProject }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [properties, setProperties] = useState([]);
  const [selectedProject, setSelectedProject] = useState(value || "");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [conversionStatus, setConversionStatus] = useState("");
  const contentRef = useRef(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState("");
  const fileInputRef = useRef(null);
  const { projects } = useContext(ProjectContext);

  const handleSelectDocument = (docId) => {
    navigate(`/document/${docId}?projectId=${selectedProject}`);
  };

  const handleProjectChange = async (e) => {
    const projectId = e.target.value;
    setSelectedProject(projectId);

    const selectedProjectObject = projects.find(
      (project) => project._id === projectId
    );

    if (selectedProjectObject) {
      setBlocks(selectedProjectObject.block || []);
      setProperties(selectedProjectObject.property || []);
    } else {
      setBlocks([]);
      setProperties([]);
    }
  };

  const handleDirectUpload = async () => {
    if (!file) {
      toast.error("Please select a DOCX file to upload.");
      return;
    }

    if (!selectedProject) {
      toast.error("Please select a project.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setConversionStatus("Uploading template...");

      const response = await uploadTemplate(selectedProject, file);

      if (response) {
        toast.success("Template uploaded successfully!");
        setConversionStatus("Template uploaded successfully!");
        console.log('Template created:', response);

        if (response._id && selectedProject) {
          handleSelectDocument(response._id);
        }

        setTimeout(() => {
          setConversionStatus("");
        }, 3000);
      }
    } catch (error) {
      console.error("Template upload error:", error);
      setError(error.message || "Failed to upload template.");
      toast.error(error.message || "Failed to upload template.");
      setConversionStatus("Failed to upload template. Please try again.");
      setTimeout(() => {
        setConversionStatus("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const convertFiled = async (content, file) => {
    setConversionStatus("Converting...");
    const formData = new FormData();
    
    // Ensure file has a name property that the server can access
    const fileWithName = new File([file], file.name, { type: file.type });
    formData.append("file", fileWithName);
    formData.append("content", content);
    formData.append("projectId", selectedProject);
    // Add filename explicitly to help the server
    formData.append("filename", file.name);

    try {
      // Use the corrected createTemplate function
      const response = await createTemplate(selectedProject, formData);
      
      if (response && response.success) {
        setLoading(false);
        handleSelectDocument(response._id);
        setConversionStatus("Template created successfully!");
        setTimeout(() => {
          setConversionStatus("");
        }, 3000);
      } else {
        throw new Error(response?.message || "Failed to create template");
      }
    } catch (error) {
      console.error("Template creation error:", error);
      setConversionStatus("Failed to create template. Please try again.");
      setTimeout(() => {
        setConversionStatus("");
      }, 3000);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onGetFile(selectedFile);
    }
  };

  const handleSave = async () => {
    if (!selectedProject) {
      toast.error("Please select a project.");
      return;
    }
    if (!file) {
      toast.error("Please select a DOCX file to upload.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const container = document.getElementById("container");
      if (!container) {
        throw new Error("Container element not found.");
      }

      await convertFiled(container.innerHTML, file);

    } catch (error) {
      console.error("Error creating or converting template:", error);
      setError(error.message || "Failed to create or convert template.");
      toast.error(error.message || "Failed to create or convert template.");
    } finally {
      setLoading(false);
    }
  };

  const onGetFile = async (selectedFile) => {
    setFile(selectedFile);
    setUploading(true);
    setUploadProgress(0);
    setTimeRemaining("Calculating...");

    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous content

    const options = {
      inWrapper: true,
      ignoreWidth: false,
      ignoreHeight: false,
      ignoreFonts: false,
      breakPages: true,
      ignoreLastRenderedPageBreak: true,
      renderHeaders: true,
      renderFooters: true,
      renderFootnotes: true,
      renderEndnotes: true,
    };

    try {
      await docx.renderAsync(selectedFile, container, null, options);
      console.log("docx: finished");

      const images = container.querySelectorAll("img");
      if (images.length > 0) {
        for (let img of images) {
          const response = await fetch(img.src);
          const blob = await response.blob();
          const reader = new FileReader();

          reader.onloadend = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const image = new Image();

            image.onload = () => {
              canvas.width = image.width;
              canvas.height = image.height;
              ctx.drawImage(image, 0, 0);
              img.src = canvas.toDataURL("image/png");
            };
            image.src = reader.result;
          };
          reader.readAsDataURL(blob);
        }
      }

      const pages = container.querySelectorAll(".docx-page");
      if (pages.length > 0) {
        const totalHeight = Array.from(pages).reduce(
          (height, page) => height + page.scrollHeight,
          0
        );
        container.style.height = `${totalHeight}px`;
      }
    } catch (error) {
      console.error("docx rendering error:", error);
      toast.error("An error occurred while rendering the document.");
    } finally {
      setUploading(false);
      setUploadProgress(100);
      setTimeRemaining("Upload complete");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-4xl mx-auto my-8">
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            <p className="text-white text-xl mt-4">{conversionStatus}</p>
          </div>
        )}

        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Document Upload</h2>
            <p className="text-gray-500 mt-1">Select a project and upload your .docx file.</p>
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="project-select" className="block text-sm font-medium text-gray-700 mb-2">
            Project <span className="text-red-500">*</span>
          </label>
          <select
            id="project-select"
            className={`w-full p-3 border rounded-lg shadow-sm transition duration-150 ease-in-out ${
              hasProject
                ? "bg-gray-100 cursor-not-allowed border-gray-300 text-gray-500"
                : "bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            }`}
            value={selectedProject}
            onChange={handleProjectChange}
            disabled={hasProject}
          >
            <option value="">Select a Project</option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>

        {!file ? (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-indigo-500 transition duration-300 ease-in-out"
            onClick={() => fileInputRef.current.click()}
          >
            <input
              type="file"
              name="docxFile"
              accept=".docx"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
            <div className="flex justify-center items-center text-gray-500">
              <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-4-4V6a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v4m0 0l-2-2m2 2l2-2"></path></svg>
            </div>
            <p className="text-lg font-semibold text-gray-700">Click to browse or drag and drop</p>
            <p className="text-sm text-gray-500 mt-1">Supports .docx files only</p>
          </div>
        ) : (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-800">{file.name}</p>
              <p className="text-gray-600 text-sm">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-indigo-700">{uploading ? "Uploading..." : "Ready"}</span>
                <span className="text-sm font-medium text-gray-500">{timeRemaining}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-width duration-500"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div id="container" ref={contentRef} style={{ display: "none" }}></div>
        
        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        
        <div className="mt-10 flex justify-end space-x-4">
          <button
            className="px-6 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-150 ease-in-out"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:bg-indigo-300"
            onClick={handleDirectUpload}
            disabled={!file || loading}
          >
            Upload Only
          </button>
          <button
            className="px-6 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:bg-green-300"
            onClick={handleSave}
            disabled={!file || loading}
          >
            Convert & Save
          </button>
        </div>
      </div>
    </>
  );
};

export default DesignTemplate;