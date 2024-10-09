import React from "react";

interface FileUploadProps {
  handleFileChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFiles: any,
    setPreviews?: any
  ) => void;
  photos: any[];
  photoPreviews?: string[];
  documents: any[];
}

export const FileUpload: React.FC<FileUploadProps> = ({
  handleFileChange,
  photos,
  photoPreviews,
  documents,
}) => {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="photos"
          className="block font-bold mb-[4px] font-inter text-[24px] text-[#001A45]"
        >
          Images and documents
        </label>
        <p className="text-sm font-inter text-[#001A45]">
          Please attach any valuable images or photos: payment screenshot, photo
          of the broken product, etc.
        </p>
        <p className="text-sm mb-2 font-inter text-[#001A45]">
          Please note that the photos are public.
        </p>
        <div className="relative">
          <input
            type="file"
            className="hidden"
            id="photos"
            // onChange={(e) => handleFileChange(e, setPhotos, setPhotoPreviews)}
            multiple
          />
          <label
            htmlFor="photos"
            className="w-full lg:w-1/2 h-[56px] px-3 py-2 border border-[#001A45] rounded-[12px] text-center cursor-pointer flex items-center justify-center font-semibold"
          >
            Add Photos
          </label>
        </div>
        {/* {photoPreviews.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 font-inter text-[#001A45] ">
            {photoPreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className="w-[80px] h-[80px] object-cover"
              />
            ))}
          </div>
        )} */}
      </div>

      <div className="mb-3">
        <label
          htmlFor="documents"
          className="block font-bold mb-[4px] font-inter text-[24px] text-[#001A45]"
        >
          Documents
        </label>
        <p className="text-sm mb-2 font-inter text-[#001A45]">
          Please attach any documents. All the documents are private.
        </p>
        <div className="relative">
          <input
            type="file"
            className="hidden"
            id="documents"
            // onChange={(e) => handleFileChange(e, setDocuments)}
            multiple
          />
          <label
            htmlFor="documents"
            className="w-full h-[56px] px-3 py-2 border border-[#001A45] rounded-[12px] lg:w-1/2 text-center cursor-pointer flex items-center justify-center font-semibold"
          >
            Add Document
          </label>
        </div>
        {documents.length > 0 && (
          <ul className="list-none mt-2 font-semibold font-inter text-[#001A45] ">
            {documents.map((doc, index) => (
              <li
                key={index}
                className="text-lg flex gap-2 border border-[#001A454D] mb-2 rounded-xl p-3 w-1/2"
              >
                {/* <img src={document} /> */}
                <span>{doc.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
