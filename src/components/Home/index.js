import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ProjectProvider } from "../../context/ProjectContext";
import TemplateProvider from "../../context/TemplateContext";
import Layout from "../Layout/Layout";

// Import pages
import Dashboard from "../../pages/Dashboard";
import Projects from "../../pages/Projects";
import Clients from "../../pages/Clients";
import ViewClient from "../../pages/ViewClient";
import NeoProjectTemplates from "../NeoProjectTemplates";
import Neo from "../Neo";
import DocxToTextConverter from "../Template/DocxToTextConverter";
import DocumentView from "../Documents/DocumentView";
import DocumentContainer from "../Documents/DocumentContainer";
import ExportComponent from "../Documents/ExportComponent";
import ViewTemplatesHighlights from "../Template/ViewTemplatesHighlights";
import ProfileSettings from "../Profile/ProfileSettings";

const Home = () => {
  return (
    <ProjectProvider>
      <TemplateProvider>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* Templates */}
          <Route path="/Neo" element={<Neo />} />
          <Route path="/document/:id" element={<DocxToTextConverter />} />
          
          {/* Documents */}
          <Route path="/docview/:id" element={<DocumentView />} />
          <Route path="/docviewall/:id" element={<DocumentContainer />} />
          <Route path="/export/:id" element={<ExportComponent />} />
          
          {/* Clients */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/viewclient" element={<ViewClient />} />
          
          {/* Projects */}
          <Route path="/projects/:id" element={<NeoProjectTemplates />} />
          <Route path="/viewAllHighlights" element={<ViewTemplatesHighlights />} />
          
          {/* Profile */}
          <Route path="/profile" element={<ProfileSettings />} />
        </Routes>
      </TemplateProvider>
    </ProjectProvider>
  );
};

export default Home;