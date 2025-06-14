import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PlusCircleIcon,
  DownloadIcon,
  ArrowLeftIcon,
  ViewBoardsIcon,
  EyeIcon,
  TrashIcon,
  MinusIcon,
} from "@heroicons/react/outline";
import { v4 as uuidv4 } from "uuid";
import imageIcon from "../Assets/image.png";
import tableIcon from "../Assets/table.png";
import DocumentHighlightsModal from "../components/Documents/DocumentHighlightsModal";
import { ViewListIcon } from "@heroicons/react/solid";
import Instructions from "../components/Instructions";
import TableHeader from "../components/TableHeader";
import { FaArrowRight } from "react-icons/fa";

import {
  addNewDocument,
  deleteDocument,
  exportDocument,
  generateZipFile,
  getDocumentsListByTemplateId,
  updateDocHighlightText,
} from "../services/documentApi";
import TooltipIcon from "../components/TooltipIcon";
import FileCarousel from "../components/FileCarousel";
import Carousel from "../components/FileCarousel";

const HighlightTable = ({ highlightsArray, templateId, filename }) => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [highlight, setHighlight] = useState("");
  const [msDocument, setMsDocument] = useState("");
  const [rowNo, setRowNo] = useState("");
  const [cellNo, setCellNo] = useState("");
  const [currentDoc, setCurrentDoc] = useState("");
  const [conversionStatus, setConversionStatus] = useState("");
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const location = useLocation(); // Gives you access to the current URL including the query string
  const queryParams = new URLSearchParams(location.search);
  const projectId = queryParams.get("projectId");
  const [templateName, setTemplateName] = useState("");

  console.log(templateId, filename);
  const fetchData = async () => {
    const response = await getDocumentsListByTemplateId(projectId, templateId);
    const templateName = response?.templateName;
    setTemplateName(templateName);
    const data = response?.documents;
    setMsDocument(data);
    console.log(data);

    const items =
      data.length > 0
        ? data.map((item) => ({
            id: item._id,
            image: item?.thumbnail, // Assuming `thumbnail` exists in each item
            title: item.fileName,
            description: item.highlights
              .filter((highlight) => highlight.type === "text")
              .map((highlight) => highlight.text)
              .join(" "),
          }))
        : [];

    setItems(items);
    setTableData(
      data.length > 0
        ? data
        : highlightsArray.map((highlight) => ({
            ...highlight,
            id: uuidv4(),
            templateId,
          }))
    );
  };

  useEffect(() => {
    console.log(templateId);
    fetchData();
  }, [highlightsArray, templateId]);

  const viewAllDocument = (docId) => {
    navigate(`/docviewall/${templateId}?projectId=${projectId}`);
  };
  const handleInputChange = (value, rowIndex, cellIndex) => {
    const updatedTableData = [...tableData];
    try {
      updatedTableData[rowIndex].highlights[cellIndex].text = value;
    } catch (err) {
      updatedTableData[rowIndex].fileName = value;
    }
    setTableData(updatedTableData);
  };

  const handleDeleteDocument = async (doc) => {
    const doc_id = doc.id ? doc.id : doc._id;
    console.log("deleteing document", doc_id);
    const response = await deleteDocument(projectId, doc_id);
    if (response) {
      fetchData();
    }
  };
  const handleViewDocument = async (doc) => {
    const doc_id = doc.id ? doc.id : doc._id;
    console.log("viewing document", doc_id);
    navigate(`/docview/${doc_id}`);
  };

  const displayListofDocuments = async () => {
    console.log("list of all document");
    navigate(`/listview`, { state: { data: tableData } });
  };

  const changeImage = (event, rowIndex, cellIndex) => {
    setIsModalOpen(true);
    //console.log(tableData[rowIndex].highlights[cellIndex]);
    setHighlight(tableData[rowIndex].highlights[cellIndex]);
    //console.log(tableData[rowIndex]);
    setCurrentDoc(tableData[rowIndex]);
    setRowNo(rowIndex);
    setCellNo(cellIndex);
  };

  const saveTableOrImage = async (value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowNo].highlights[cellNo].text = value;
    const updatedRow = updatedTableData[rowNo];
    const updatedHighlight = updatedTableData[rowNo].highlights[cellNo];
    //  updatedRow.content = await editDocumentContent(conversionStatus,updatedHighlight)
    console.log(updatedRow);
    const doc_id = updatedRow.id ? updatedRow.id : updatedRow._id;
    const response = await updateDocHighlightText(doc_id, updatedRow);
    if (response) fetchData();
  };

  const handleBlur = async (rowIndex, cellIndex) => {
    const updatedRow = tableData[rowIndex];
    const updatedHighlight = updatedRow.highlights[cellIndex];
    // updatedRow.content = await editDocumentContent(conversionStatus,updatedHighlight)
    console.log(updatedRow);
    const doc_id = updatedRow.id ? updatedRow.id : updatedRow._id;
    const response = await updateDocHighlightText(doc_id, updatedRow);
    console.log(response);
    //setTableData([...tableData]);
    fetchData();
    // }
  };

  const handleBack = () => {
    navigate("/Neo");
  };

  const handleExportTemplate = (row) => {
    handleExport(templateId, row);
  };

  const handleExport = async (row) => {
    try {
      const response = exportDocument(row._id);
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", row.fileName.trim() + ".docx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };

  const handleDocument = (rowIndex, cellIndex) => {
    setConversionStatus(tableData[rowIndex].content);
  };

  const handleAddRow = async () => {
    if (tableData[0].highlights) {
      const newCells = {
        id: uuidv4(),
        templateId,
        fileName: "DocName" + tableData.length,
        highlights: tableData[0].highlights.map((cell) => ({
          id: cell.id,
          label: cell.label,
          text: cell.text,
          type: cell.type,
        })),
      };
      const response = await addNewDocument(newCells);
      const { id } = response;
      newCells.id = id;
      setTableData([...tableData, newCells]);
    }
  };
  const handleExportAll = async (event) => {
    event.preventDefault();
    const documentIds = msDocument.map((doc) => doc._id);
    const document = {
      documentIds,
      folderName: filename,
      templateId: templateId,
      projectId: projectId,
    };
    try {
      setIsLoading(true);
      const response = await generateZipFile(document, filename);
      if (response === "Success") setIsLoading(false);
    } catch (error) {
      console.error(error);
      console.log("Failed to zip the documents.");
    }
  };

  return (
    <div className='w-full'>
      <div className='w-full rounded-lg'>
        <div className='flex pb-2'>
          <div className='w-96 flex-1 rounded-lg mr-4 text-gray-400 pt-2 text-sm'>
            <div className='flex'>
              {/*Project Name <FaArrowRight className="text-gray-500 pt-2" size={16} />*/}{" "}
              {templateName}
            </div>
          </div>
          <div className='w-1/2 text-gray-400 rounded-lg mr-4'>
            <input
              type='text'
              value='Search'
              //onChange={handleInputChange}
              placeholder='Search...'
              className='px-4 py-2 w-full max-w-md border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='w-1/4 rounded-lg mr-4'>
            <button
              className='px-2 py-2 bg-gray-200 border-black-500 text-blue-500 rounded hover:bg-gray-600 mr-2'
              onClick={viewAllDocument}
            >
              Preview
            </button>
            <button
              className='px-2 py-2 bg-indigo-500 border-blue-500 text-white rounded hover:bg-blue-600 transition-colors mr-2'
              onClick={handleExportAll}
            >
              Generate
            </button>
            <button
              className='px-2 py-2 bg-indigo-500 border-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
              onClick={displayListofDocuments}
            >
              Summary
            </button>
          </div>
          <div className='w-1/8 rounded-lg'>
            <TooltipIcon>
              <ul className='list-disc pl-5 space-y-2 flex-grow'>
                <li>
                  Please click on the + sign to add more columns/rows to the
                  tables.
                </li>
                <li>
                  Variable names can be edited by double-clicking on the name.
                  (The allotted space will remain unchanged)
                </li>
                <li>
                  Click on Generate button below to get the documents prepared
                  using your standard format.
                </li>
                <li>
                  The documents can be auto formatted in the preview window.
                </li>
              </ul>
            </TooltipIcon>{" "}
          </div>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='flex w-full overflow-x-auto  bg-white  rounded-lg'>
          {tableData.length > 0 && (
            <table
              id='doc-table'
              className='bg-white shadow-md rounded-lg border-collapse w-full'
            >
              <thead>
                <tr className='bg-gray-300 text-gray-700 text-sm font-normal'>
                  <TableHeader
                    tableData={tableData}
                    handleAddRow={handleAddRow}
                    name='Variable Name'
                    firstColumn={true}
                  />
                  {tableData.map((row, rowIndex) => (
                    <th key={rowIndex} className='px-2 text-left'>
                      <div className='flex items-center justify-between text-sm'>
                        <input
                          type='text'
                          value={row.fileName}
                          onChange={(e) =>
                            handleInputChange(e.target.value, rowIndex, false)
                          }
                          onBlur={() => handleBlur(rowIndex, false)}
                          className='h-8 px-2 bg-transparent rounded focus:ring-2 focus:ring-blue-500'
                        />
                        <div className='flex items-center'>
                          {tableData.length > 1 && (
                            <button
                              className='bg-transparent text-red-400 rounded hover:bg-white transition-colors m-2 flex items-center'
                              onClick={() => handleDeleteDocument(row)}
                            >
                              <MinusIcon className='w-5 h-5 inline-block m-1' />
                              <span className='m-1'>Remove</span>
                            </button>
                          )}
                          <button
                            className='hidden bg-green-500 text-white rounded hover:bg-blue-600 transition-colors m-2'
                            onClick={() => handleViewDocument(row)}
                          >
                            <EyeIcon className='w-5 h-5 inline-block m-1' />
                          </button>
                          <button
                            className='hidden bg-green-500 text-white rounded hover:bg-blue-600 transition-colors m-2'
                            onClick={() => handleExport(row)}
                          >
                            <DownloadIcon className='w-5 h-5 inline-block m-1' />
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData[0].highlights.map((cell, cellIndex) => (
                  <tr key={cellIndex} className=' p-1 m-1'>
                    <td className='p-1 m-1 border-r border-gray-300'>
                      <div className='border border-gray-300 rounded p-1 pl-4 m-1 text-sm'>
                        {cell.label}
                      </div>
                    </td>
                    {tableData.map((row, rowIndex) => (
                      <td
                        key={rowIndex}
                        className='  p-1 m-1 border-r border-gray-300 text-sm'
                      >
                        <div className='border border-gray-300 rounded   '>
                          {tableData[rowIndex].highlights[cellIndex].type ===
                          "text" ? (
                            <input
                              type='text'
                              value={
                                tableData[rowIndex].highlights[cellIndex].text
                              }
                              onChange={(e) =>
                                handleInputChange(
                                  e.target.value,
                                  rowIndex,
                                  cellIndex
                                )
                              }
                              onBlur={() => handleBlur(rowIndex, cellIndex)}
                              onFocus={() =>
                                handleDocument(rowIndex, cellIndex)
                              }
                              className=' rounded focus:ring-2 focus:ring-blue-500 w-full m-0 p-1 pl-4'
                            />
                          ) : tableData[rowIndex].highlights[cellIndex].type ===
                            "image" ? (
                            <>
                              {" "}
                              {tableData[rowIndex].highlights[cellIndex]
                                .text !== "" ? (
                                <>
                                  <span
                                    className='font-semibold hidden'
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        tableData[rowIndex].highlights[
                                          cellIndex
                                        ].text,
                                    }}
                                  ></span>{" "}
                                  <button
                                    onClick={(e) =>
                                      changeImage(e, rowIndex, cellIndex)
                                    }
                                    className='mt-2'
                                  >
                                    <img src={imageIcon} />
                                  </button>
                                </>
                              ) : (
                                <button>
                                  <input
                                    type='file'
                                    name='selectedImage'
                                    onChange={(e) =>
                                      changeImage(
                                        e.target.value,
                                        rowIndex,
                                        cellIndex
                                      )
                                    }
                                    accept='image/*'
                                    className='mt-2'
                                  />
                                </button>
                              )}{" "}
                            </>
                          ) : tableData[rowIndex].highlights[cellIndex].type ===
                            "table" ? (
                            <>
                              {" "}
                              {tableData[rowIndex].highlights[cellIndex]
                                .text !== "" ? (
                                <>
                                  <span
                                    className='font-normal hidden'
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        tableData[rowIndex].highlights[
                                          cellIndex
                                        ].text,
                                    }}
                                  ></span>
                                  <button
                                    onClick={(e) =>
                                      changeImage(e, rowIndex, cellIndex)
                                    }
                                    className='mt-2'
                                  >
                                    <img src={tableIcon} />
                                  </button>
                                </>
                              ) : (
                                <button>+add</button>
                              )}{" "}
                            </>
                          ) : (
                            " "
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div
            ref={contentRef}
            id='hiddenRenderDoc'
            dangerouslySetInnerHTML={{ __html: conversionStatus }}
            className='border p-4 mr-4 flex-grow bg-white shadow-sm rounded-lg hidden'
            style={{ height: "500px", overflow: "auto" }}
          ></div>
          {isLoading && (
            <div className='fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50'>
              <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
            </div>
          )}
          <div className='mt-4 space-x-2 hidden'>
            <button
              className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors'
              onClick={handleBack}
            >
              <ArrowLeftIcon className='w-5 h-5 inline-block mr-2' /> Back
            </button>
            <button
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors'
              onClick={handleExportAll}
            >
              <DownloadIcon className='w-5 h-5 inline-block mr-2' /> Export All
            </button>
            <button
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors'
              onClick={viewAllDocument}
            >
              <ViewListIcon className='w-5 h-5 inline-block mr-2' /> View All
            </button>
          </div>
          <div>
            <DocumentHighlightsModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSave={saveTableOrImage}
              highlight={highlight}
              tempDocument={currentDoc}
              initialText={highlight.text}
            />
          </div>
        </div>
      </div>
      <div className='flex ml-12'>
        <div className='mt-4'>
          <Carousel
            items={items}
            slidesToShow={6}
            itemWidth={150}
            carouselWidth={900}
            projectId={projectId}
            templateId={templateId}
          />
        </div>
      </div>
      {/*  <div className="col-span-1 bg-white rounded-lg shadow-md  ">
      Right column content goes here 

        <Instructions handleExportAll={handleExportAll} viewAllDocument={viewAllDocument} displayListofDocuments={displayListofDocuments} />
      </div>*/}
    </div>
  );
};

export default HighlightTable;
