import React from "react";
// import { useModal } from "../../context/ModalContext";
// import FileComplaintForm from "../FileComplaintForm/FileComplaintForm.jsx";
export const HowItWorksSection = () => {
  //   const { showModal } = useModal();

  //   const handleFileComplaintClick = () => {
  //     showModal(<FileComplaintForm />);
  //   };

  return (
    <section className="sm:px-30 px-[120px] py-5 sm:pt-40 sm:pb-20 bg-white scale-20">
      <div className="mb-8 text-center">
        <h1 className="text-[64px] font-unbounded font-bold text-[#001A45]">
          How it works?
        </h1>
        <p className="text-[24px] text-[#001A45] font-inter font-semibold mt-2">
          Here, we make sure your complaints get heard and fixed, fast. File
          Your Complaint Easily
        </p>
      </div>

      <div className="flex flex-row justify-center items-center text-center">
        <div className="flex flex-col items-center mt-24">
          <div className="lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] text-[48px] rounded-full bg-[#CBFFBE] text-[#598E4B] font-unbounded font-bold mb-2 flex items-center justify-center">
            1
          </div>
          <h3 className="text-xl sm:text-3xl font-inter font-bold mb-2 text-[#001A45] text-center">
            Describe Your Issue
          </h3>
          <p className="text-[18px] font-inter text-[#001A45]">
            Let us know what went wrong.
          </p>
        </div>
        <img
          src="/arrow_up.svg"
          alt="Arrow up"
          className="w-[240px] h-[47px] self-start mt-[100px]"
        />
        <div className="flex flex-col items-center mt-24 md:mt-36">
          <div className="lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] text-[48px] rounded-full bg-[#CBFFBE] text-[#598E4B] font-unbounded font-bold mb-2 flex items-center justify-center">
            2
          </div>
          <h3 className="text-xl sm:text-3xl font-inter font-bold mb-2 text-[#001A45] text-center">
            Submit
          </h3>
          <p className="text-[18px] font-inter text-[#001A45]">
            We handle the details, contacting <br />
            the company and making your case public.
          </p>
        </div>
        <img
          src="/arrow_down.svg"
          alt="Arrow down"
          className="w-[240px] h-[47px] self-end mb-[100px]"
        />
        <div className="flex flex-col items-center mt-24">
          <div className="lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] text-[48px] rounded-full bg-[#CBFFBE] text-[#598E4B] font-unbounded font-bold mb-2 flex items-center justify-center">
            3
          </div>
          <h3 className="text-xl sm:text-3xl font-inter font-bold mb-2 text-[#001A45] text-center">
            See Results
          </h3>
          <p className="text-[18px] font-inter text-[#001A45] max-w-[300px]">
            Track your complaint&apos;s journey to resolution.
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          className="mt-5 hover:bg-[#C9FF57] bg-[#B5F62B] active:bg-[#A9E922] sm:w-[312px] w-[100%] h-[55px] rounded-[12px] text-[18px]"
          //   onClick={handleFileComplaintClick}
        >
          File now
        </button>
      </div>
    </section>
  );
};
