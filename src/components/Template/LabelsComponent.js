import React, { useEffect, useState } from "react";
import { getExistingLabelsInProject } from "../../services/projectApi";

const LabelsComponent = ({
  newHighlight,
  handleInputChange,
  existingLabels,
  labelType,
}) => {
  const [activeTab, setActiveTab] = useState("existing"); // Default to 'existing'
  //  const [existingLabels, setExistingLabels] = useState([]); // Store fetched labels
  const [selectedLabel, setSelectedLabel] = useState(""); // Track selected label value
  /*
  const fetchLabels = async (projectId) => {
    console.log(projectId);
    try {
      const result = await getExistingLabelsInProject(projectId);
      setExistingLabels(result || []);
      console.log("Existing Labels: ", result);
    } catch (error) {
      console.error("Error updating templates: ", error);
    }
  };

  useEffect(() => {
    if (projectId) {
      fetchLabels(projectId);
    }
  }, []);*/

  const handleLabelChange = (e) => {
    const selected = e.target.value;
    setSelectedLabel(selected);

    // Update newHighlight with the selected label and value
    const selectedLabelObj = existingLabels.find((label) => label === selected);
    console.log(selectedLabelObj);
    if (selectedLabelObj) {
      newHighlight.label = selected;
      handleInputChange({
        target: { name: "label", value: newHighlight.label },
      });
    }
  };

  return (
    <div className='w-full mx-auto bg-white rounded-lg shadow-md'>
      {/* Tab Buttons */}
      <div className='flex border-b'>
        <button
          className={`w-1/2 py-2 text-center font-semibold ${
            activeTab === "existing"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("existing")}
        >
          Existing
        </button>
        <button
          className={`w-1/2 py-2 text-center font-semibold ${
            activeTab === "new"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("new")}
        >
          New
        </button>
      </div>

      {/* Tab Content */}
      <div className='p-6'>
        {activeTab === "existing" && (
          <div>
            {/* Dropdown for Existing Labels */}
            <div className='mb-4'>
              <select
                value={selectedLabel}
                onChange={handleLabelChange}
                className='w-full border border-gray-300 p-2 rounded'
                disabled={!newHighlight.text}
              >
                <option value='' disabled>
                  Select a label
                </option>
                {existingLabels.map((label, index) => (
                  <option key={index} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Display Selected Label and Value */}
            <div className='flex border rounded-md px-2 py-2'>
              <input
                type='text'
                placeholder='Label'
                name='label'
                className='w-full border border-gray-300 p-2 rounded mr-2'
                value={newHighlight.label}
                readOnly
              />
              <input
                type='text'
                placeholder='Value'
                name='text'
                className='w-full border border-gray-300 p-2 rounded'
                value={newHighlight.text}
                readOnly
                hidden={labelType === "text" ? false : true}
              />
            </div>
          </div>
        )}
        {activeTab === "new" && (
          <div className='flex border rounded-md px-2 py-2 w-full '>
            <input
              type='text'
              placeholder='Label'
              name='label'
              className='w-full border border-gray-300 p-2 rounded mr-2'
              value={newHighlight.label}
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Value'
              name='text'
              className='w-full border border-gray-300 p-2 rounded'
              value={newHighlight.text}
              onChange={handleInputChange}
              hidden={labelType === "text" ? false : true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LabelsComponent;
