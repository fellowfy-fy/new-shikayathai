"use client";

import { useState, useEffect } from "react";
import { CompanySearch } from "../company-search";
import { ComplaintDetails } from "../complaint-details";
// import FileUpload from "./file-upload";
// import InfoComponent from "../pop-ups/InfoComponent";
// import useAuth from "../../hooks/useAuth";
import useModalStore from "@/store/modal";

export const ComplaintForm = () => {
  const { showModal, hideModal } = useModalStore();
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [companies, setCompanies] = useState([]);
  //   const { auth } = useAuth();

  const handleInfoClick = () => {
    // showModal(<InfoComponent />);
  };

  //   const handleCompanyChange = (e) => {
  //     setCompany(e.target.value);
  //   };

  //   const handleCompanySelect = (companyName) => {
  //     setCompany(companyName);
  //     setCompanies([]);
  //   };

  //   const handleFileChange = (event, setFiles, setPreviews) => {
  //     const files = Array.from(event.target.files);
  //     setFiles(files);

  //     if (setPreviews) {
  //       const previews = files.map((file) => URL.createObjectURL(file));
  //       setPreviews(previews);
  //     }
  //   };

  //   const handleNextStep = (event) => {
  //     event.preventDefault();
  //     // Логика следующего шага
  //   };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-20">
      <div className="relative bg-white p-6 rounded-[32px] shadow-lg w-full max-w-[800px] h-auto overflow-hidden max-h-[80vh] overflow-y-auto">
        <CompanySearch
          company={company}
          companies={companies}
          //   onCompanyChange={handleCompanyChange}
          //   onCompanySelect={handleCompanySelect}
        />
        <ComplaintDetails
          description={description}
          setDescription={setDescription}
          handleInfoClick={handleInfoClick}
        />
        {/* <FileUpload
          //   handleFileChange={handleFileChange}
          photos={photos}
          //   photoPreviews={photoPreviews}
          documents={documents}
        /> */}
        <button
          type="submit"
          className="w-full h-[55px] hover:bg-[#C9FF57] text-[#001A45] bg-[#B5F62B] active:bg-[#A9E922] text-[18px] font-semibold py-2 px-4 rounded-[12px]"
        >
          {/* {auth?.name ? "Add complaint" : "Next"} */}
        </button>
      </div>
    </div>
  );
};
