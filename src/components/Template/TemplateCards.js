import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TemplateContext } from '../../context/TemplateContext';
import Button from '../UI/Button';
import Card from '../UI/Card';
import {
  FaFileAlt,
  FaEdit,
  FaDownload,
  FaTrash,
  FaEllipsisV,
  FaEye,
  FaPlus
} from 'react-icons/fa';

const TemplateCard = ({ docObj, documentId, name, thumbnail, handleDelete, handleDownload, template, projectId }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const menuRef = useRef(null);

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
    setDeleteModal(false);
    handleDelete(documentId);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="relative overflow-hidden group cursor-pointer" style={{ width: '280px', height: '380px' }}>
          {/* Menu Button */}
          <div className="absolute top-3 right-3 z-10" ref={menuRef}>
            <Button
              variant="ghost"
              size="sm"
              icon={<FaEllipsisV />}
              onClick={toggleMenu}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm"
            />
            
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-20"
                >
                  {!template && (
                    <motion.button
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      onClick={() => handleCreateDocuments(documentId)}
                      whileHover={{ x: 4 }}
                    >
                      <FaPlus className="h-4 w-4 text-green-500" />
                      Create Document
                    </motion.button>
                  )}
                  
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                    onClick={() => handleView(documentId)}
                    whileHover={{ x: 4 }}
                  >
                    <FaEye className="h-4 w-4 text-blue-500" />
                    {template ? 'View' : 'Preview'}
                  </motion.button>

                  {!template && (
                    <motion.button
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      onClick={() => handleEdit(documentId)}
                      whileHover={{ x: 4 }}
                    >
                      <FaEdit className="h-4 w-4 text-orange-500" />
                      Edit
                    </motion.button>
                  )}

                  {template && (
                    <motion.button
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      onClick={() => handleDownloadDocument(docObj)}
                      whileHover={{ x: 4 }}
                    >
                      <FaDownload className="h-4 w-4 text-green-500" />
                      Download
                    </motion.button>
                  )}

                  <div className="border-t border-gray-100 my-1" />
                  
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3"
                    onClick={() => setDeleteModal(true)}
                    whileHover={{ x: 4 }}
                  >
                    <FaTrash className="h-4 w-4" />
                    Delete
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Thumbnail */}
          <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
            {thumbnail ? (
              <img
                src={`data:image/png;base64,${thumbnail}`}
                alt={name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <FaFileAlt className="w-16 h-16 text-gray-400" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">{name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {template ? 'Document' : 'Template'}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="xs"
                  icon={<FaEye />}
                  onClick={() => handleView(documentId)}
                />
                {!template && (
                  <Button
                    variant="ghost"
                    size="xs"
                    icon={<FaEdit />}
                    onClick={() => handleEdit(documentId)}
                  />
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTrash className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Delete {template ? 'Document' : 'Template'}</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this {template ? 'document' : 'template'}? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setDeleteModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="danger"
                    onClick={confirmDelete}
                    className="flex-1"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TemplateCards = ({ handleDeleteTemplate, handleDownload, template = false, projectId }) => {
  const templateContext = useContext(TemplateContext);
  const templates = templateContext?.templates || [];

  if (!templates || templates.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaFileAlt className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
        <p className="text-gray-500 mb-6">Get started by creating your first template</p>
        <Button variant="primary" icon={<FaPlus />}>
          Create Template
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
      {templates.map((doc, index) => (
        <motion.div
          key={doc._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <TemplateCard
            docObj={doc}
            documentId={doc._id}
            name={doc.fileName}
            thumbnail={doc.thumbnail}
            handleDelete={handleDeleteTemplate}
            handleDownload={handleDownload}
            template={template}
            projectId={projectId}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TemplateCards;