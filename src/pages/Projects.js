import React, { useState, useEffect, useContext } from "react";
import NeoProject from "./NeoProject"; // Import your NeoProject component
import NeoModal from "../components/NeoModal"; // Import the Modal component
import ProjectCards from "../components/Project/ProjectCards";
//import { getAllProjects } from "../services/projectApi";
import SearchBar from "../components/SearchBar";
import SearchHeader from "../components/SearchHeader";
import { MdAssignmentAdd } from "react-icons/md";
import { ProjectContext } from "../context/ProjectContext";
//import { getAllProjects } from "../context/ProjectContext";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { projects } = useContext(ProjectContext);

  /*useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getAllProjects();
      const data = response;
      console.log(data);
      setProjects(data);
    } catch (error) {
      setError("Failed to fetch documents");
      console.error("Failed to fetch documents", error);
    } finally {
      setLoading(false);
    }
  };*/
  const handleSave = (updatedProject) => {
    //setProject(updatedProject);
    setIsModalOpen(false);
    //setProjects(projects);
    // fetchProjects();
  };

  const handleEdit = (project) => {
    console.log(project);
    setProject(project);
    setIsModalOpen(true);
    //fetchProjects();
  };

  const handleCancel = () => {
    setProject("");
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="flex text-gray-400 text-xs p-1"> Projects</div>
      <div className="m-1">
        <SearchHeader />
      </div>
      <div className="flex justify-end mb-3 px-3 p-1 mt-3 mr-3 rounded-lg ">
        <button
          className="bg-indigo-500  text-white font-normal py-1.5 px-3 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <MdAssignmentAdd className="inline" /> Add Project
        </button>
        
      </div>
      <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
        <p className="text-xl font-semibold text-gray-700">
          Total Projects: <span className="text-indigo-600">{projects.length}</span>
        </p>
      </div>

      <div className="w-full p-1">
        <h2 className="text-2xl font-semibold mb-3 text-left ml-12 ">Projects</h2>
        <div className="flex justify-center gap-6">
         
          {loading && <div>Loading...</div>}
          <ProjectCards projects={projects} onEdit={handleEdit} />
        </div>
      </div>
     
      <NeoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NeoProject
          mode={project._id ? "edit" : "add"}
          project={project}
          onSave={handleSave}
          handleClose={handleCancel}
        />
      </NeoModal>
    </div>
  );
};

export default Projects;
