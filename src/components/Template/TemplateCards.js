import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateProvider, { TemplateContext } from '../../context/TemplateContext';

const Card = ({ docObj, documentId, name, thumbnail, content, handleDelete, handleDownload, template, projectId }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [deleteTemplateModal, setDeleteTemplateModal] = useState(false);

  const handleView = (docId) => {
    if (template) {
      navigate(`/docview/${docId}`);
    } else {
      navigate(`/document/${docId}`);
    }
  };

  const handleEdit = (docId) => {
    let goTo;
    if (projectId) {
      goTo = `/document/${docId}?projectId=${projectId}`
    } else {
      goTo = `/document/${docId}`
    }
    navigate(goTo);
  };

  const promptForDeletion = (documentId) => {
    setDeleteTemplateModal(true);
  }

  const handleCreateDocuments = (docId) => {
    navigate(`/export/${docId}?projectId=${projectId}`);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleDownloadDocument = (docObj) => {
    setMenuOpen(false);
    handleDownload(docObj);
  }

  const confirmDelete = () => {
    setDeleteTemplateModal(false);
    handleDelete(documentId);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Inline SVG for EllipsisV icon
  const EllipsisVIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="currentColor" className="w-5 h-5">
      <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM0 128c0 53 43 96 96 96s96-43 96-96S149 32 96 32 0 75 0 128zm0 256c0 53 43 96 96 96s96-43 96-96S149 320 96 320 0 363 0 416z"/>
    </svg>
  );

  // Inline SVG for FileAlt icon
  const FileAltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 mr-2">
      <path d="M369.9 97.9L286 14.1C277.9 5.7 266.4 0 254.6 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V154.6c0-11.8-4.7-23.3-12.1-31.7zM320 464H64V48h160v104c0 13.3 10.7 24 24 24h104v288z"/>
    </svg>
  );

  // Inline SVG for Edit icon
  const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-4 h-4 mr-2">
      <path d="M402.6 83.2l90.2 90.2c12.5 12.5 12.5 32.8 0 45.3l-246.3 246.3c-12.5 12.5-32.8 12.5-45.3 0L32.8 325.2c-12.5-12.5-12.5-32.8 0-45.3l246.3-246.3c12.5-12.5 32.8-12.5 45.3 0l90.2 90.2zm20.4-20.4L330.4 0H512c35.3 0 64 28.7 64 64V240.4L423 42.6zM0 432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V384H0v48z"/>
    </svg>
  );

  // Inline SVG for Download icon
  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 mr-2">
      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256H136c-22.1 0-41 12.7-50.5 32.5s-2.3 43.1 12.7 58.1L236.4 445.6c12.5 12.5 32.8 12.5 45.3 0l152-152c15-15 17.7-37.5 12.7-58.1s-28.4-32.5-50.5-32.5H288V32z"/>
    </svg>
  );

  // Inline SVG for Trash icon
  const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 mr-2">
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.4C301.1 6.8 291.5 0 281.3 0H166.7c-10.2 0-19.8 6.8-23.5 17.7zM400 128H48L70.4 472c1.1 18.1 16.5 32 34.6 32H343c18.1 0 33.5-13.9 34.6-32L400 128z"/>
    </svg>
  );

  return (
    // Main card container with enhanced shadow, border, and rounded corners
    <div className="relative border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between bg-white" style={{ width: '200px', height: '350px' }}>
      {/* Top right menu button */}
      <div className="absolute top-2 right-2 z-10" ref={menuRef}>
        <button
          className="p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleMenu}
        >
          <EllipsisVIcon />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1 text-sm">
            {!template && (
              <button
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleCreateDocuments(documentId)}
              >
                <FileAltIcon /> Create Document
              </button>
            )}
            {template && (
              <button
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleView(documentId)}
              >
                <FileAltIcon /> View
              </button>
            )}
            {!template && (
              <button
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleEdit(documentId)}
              >
                <EditIcon /> Edit
              </button>
            )}
            {template && (
              <button
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleDownloadDocument(docObj)}
              >
                <DownloadIcon /> Download
              </button>
            )}
            <button
              className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50"
              onClick={() => promptForDeletion(documentId)}
            >
              <TrashIcon /> Delete
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail/Image Display Area */}
      <div className="flex-1 p-4 pb-0 flex justify-center items-center">
        <div
          className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
          style={{
            height: '250px',
            objectFit: 'contain',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Using a placeholder image if thumbnail is not available */}
          {thumbnail ? (
            <img
              src={`data:image/png;base64,${thumbnail}`}
              alt={name}
              className="w-full h-full object-contain rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Document Name/Title */}
      <div className="p-4 pt-2">
        <div className="text-center font-semibold text-gray-800 text-base truncate">{name}</div>
      </div>

      {/* Delete Confirmation Modal (inlined) */}
      {deleteTemplateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
            <h5 className="text-xl font-bold text-center mb-4 text-gray-800">Are you sure?</h5>
            <p className="text-center mb-6 text-gray-600">You want to delete the {template ? 'document' : 'template'}?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                onClick={() => setDeleteTemplateModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                onClick={() => confirmDelete()}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const TemplateCards = ({ handleDeleteTemplate, handleDownload, template = false, projectId }) => {
  return (
    <TemplateProvider>
      <div id="cardContainer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center h-full overflow-y-auto">
        <TemplateContext.Consumer>
          {({ templates }) => (
            !templates ? (
              <div>Loading templates...</div>
            ) : (
              templates.map((doc) => (
                <Card
                  docObj={doc}
                  key={doc._id}
                  documentId={doc._id}
                  name={doc.fileName}
                  thumbnail={doc.thumbnail}
                  handleDelete={handleDeleteTemplate}
                  handleDownload={handleDownload}
                  template={template}
                  projectId={projectId}
                />
              ))
            )
          )}
        </TemplateContext.Consumer>
      </div>
    </TemplateProvider>
  );
};

export default TemplateCards;
