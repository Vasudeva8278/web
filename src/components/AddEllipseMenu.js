import React, { useState } from 'react';
import {TagIcon, TableIcon, PhotographIcon, ChevronDownIcon } from '@heroicons/react/outline';

const AddEllipsisMenu = ({ setAddTable, setAddImage, setIsMultiple, setAddLabel }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          className="inline-flex justify-center w-full text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
         + Add <ChevronDownIcon className="h-4 w-4 mt-1" aria-hidden="true" /> 
        </button>
      </div>

      {menuOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="text-gray-700 block px-4 py-2 text-sm flex w-full items-center text-left hover:bg-blue-100"
              onClick={() => {
                setMenuOpen(false);
                setAddTable(false);
                setAddImage(false);
                setIsMultiple(false);
                setAddLabel(true);
              }}
            >
              <TagIcon className="h-5 w-5 mr-1" /> Add Label
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm flex w-full items-center text-left hover:bg-blue-100"
              onClick={() => {
                setMenuOpen(false);
                setAddTable(true);
                setAddLabel(false);
                setAddImage(false);
                setIsMultiple(false);
              }}
            >
              <TableIcon className="h-5 w-5 mr-1" /> Add Table
            </button>
            <button
              className="text-gray-700 block px-4 py-2 text-sm flex w-full items-center text-left hover:bg-blue-100"
              onClick={() => {
                setMenuOpen(false);
                setAddImage(true);
                setAddLabel(false);
                setAddTable(false);
                setIsMultiple(false);
              }}
            >
              <PhotographIcon className="h-5 w-5 mr-1" /> Add Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEllipsisMenu;
