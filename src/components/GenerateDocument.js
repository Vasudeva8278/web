import React, { useState, useContext } from "react";
import { GoProjectTemplate } from "react-icons/go";
import { getTemplatesByProjectId } from "../services/templateApi";
//import { getAllProjects } from '../services/projectApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { TemplateContext } from "../context/TemplateContext";

const GenerateDocument = ({ onClose, value, hasProject }) => {
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState(value || "");
  const [templateId, setTemplateId] = useState("");
  const templateContext = useContext(TemplateContext);
  const templates = templateContext?.templates || [];
  //const [projects, setProjects] = useState([]);
  const { projects } = useContext(ProjectContext);
  // Remove the duplicate declaration of 'templates'
  // const { templates } = useContext(TemplateContext);

  const handleTemplateChange = (e) => {
    setTemplateId(e.target.value);
  };

  const handleProjectChange = (e) => {
    const selectedProjectId = e.target.value;
    setProjectId(selectedProjectId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectId) {
      toast.error("Please select a project");
      return;
    }
    if (!templateId) {
      toast.error("Please select a template");
      return;
    }
    navigate(`/export/${templateId}?projectId=${projectId}`);
  };

  console.log("All templates:", templates);
  console.log("Current projectId:", projectId);

  const filteredTemplates = templates; // Ignore projectId filter for now

  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex h-screen">
        <div className="relative border-r border-gray-300 flex flex-col w-64 bg-gray-100 h-full overflow-y-auto">
          {/* ...sidebar code... */}
        </div>
        <div className="flex-1 h-full overflow-y-auto">
          <div
            className="flex flex-col w-full h-full overflow-y-auto"
            style={{ maxHeight: "100vh" }}
          >
            <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <ToastContainer />
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-normal">Generate Documents</h2>
                  <button
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={onClose}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="projectName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Project Name*
                    </label>
                    <select
                      className={`mt-1 block w-full py-2 px-3 border rounded-md shadow-sm sm:text-sm ${
                        hasProject
                          ? "bg-gray-100 cursor-not-allowed border-gray-300 text-gray-500"
                          : "bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      }`}
                      value={projectId}
                      onChange={handleProjectChange}
                      disabled={hasProject}
                    >
                      <option value="">Select project</option>
                      {projects.map((project) => (
                        <option key={project._id} value={project._id}>
                          {project.projectName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="templateName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Template Name*
                    </label>
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={templateId}
                      onChange={handleTemplateChange}
                    >
                      <option value="">Select Template</option>
                      {filteredTemplates.map((template) => (
                        <option key={template._id} value={template._id}>
                          {template.fileName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded mr-2"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-indigo-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded"
                    >
                      Proceed
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateDocument;
