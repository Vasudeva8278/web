import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation";
import ProfileSettings from "../Profile/ProfileSettings";
import Dashboard from "../Dashboard/Dashboard";
import MainPage from "../MainPage";
import Homepage from "../Homepage";
import Neo from "../../components/Neo";
import DocxToTextConverter from "../Template/DocxToTextConverter";
import ExportComponent from "../Documents/ExportComponent";
import DocumentView from "../Documents/DocumentView";
import DocumentContainer from "../Documents/DocumentContainer";
import Header from "../../components/Header";
import ListofDocuments from "../Documents/ListofDocument";
import Projects from "../../pages/Projects";
import NeoProjectTemplates from "../NeoProjectTemplates";
import ViewTemplatesHighlights from "../Template/ViewTemplatesHighlights";
import Clients from "../../pages/Clients";
import ViewClient from "../../pages/ViewClient";

const Home = () => {
  // State to manage visibility of Navigation component
  const [isNavigationVisible, setIsNavigationVisible] = useState(true);

  // Function to toggle Navigation visibility
  const toggleNavigation = () => {
    setIsNavigationVisible((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Header toggleNavigation={toggleNavigation} />
      </div>
      <div className='flex flex-1'>
        {isNavigationVisible && (
          <div className='w-64'>
            <Navigation />
          </div>
        )}
        <div className='flex-1 p-2 overflow-auto bg-gray-50'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Neo' element={<Neo />} />
            <Route path='/document/:id' element={<DocxToTextConverter />} />
            <Route path='/docview/:id' element={<DocumentView />} />
            <Route path='/docviewall/:id' element={<DocumentContainer />} />
            <Route path='/listView' element={<ListofDocuments />} />
            <Route path='/export/:id' element={<ExportComponent />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/profile' element={<ProfileSettings />} />
            <Route path='/viewclient' element={<ViewClient />} />
            <Route path='/projects/:id' element={<NeoProjectTemplates />} />
            <Route
              path='/viewAllHighlights'
              element={<ViewTemplatesHighlights />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
