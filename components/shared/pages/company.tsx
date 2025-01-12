// import navigationArrow from "../../assets/navigationArrow.svg";
// import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import ComplaintComponent from "../AllComplaints/ComplaintComponent";
// import api from "../../api/axios";
// import star from "../../assets/star.svg";
// import wwwglobus from "../../assets/wwwglobus.svg";
// import filtericon from "../../assets/filtericon.svg";

export const CompanyPage = () => {
  const [company, setCompany] = useState(null);
  //   const { id } = useParams();

  useEffect(() => {
    const fetchCompany = async () => {
      //   try {
      //     const apiRes = await api.get(`companies/details/${id}`);
      //     setCompany(apiRes.data);
      //   } catch (error) {
      //     console.error("Error fetching complaint:", error);
      //   }
    };
    fetchCompany();
  }, []);

  //   if (!company) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <div className="mx-[24px] sm:mx-[120px] mt-2 text-[#001A45]">
        {/* 1 line */}
        <div className="flex flex-row gap-2 mb-10">
          {/* <Link to="/" className="text-[#001A45] hover:underline">
            Home
          </Link> */}
          {/* <img src={navigationArrow} /> */}
          {/* <Link to="/brands" className="text-[#001A45] hover:underline">
            All brands
          </Link> */}
          {/* <img src={navigationArrow} /> */}
          {/* <span className="font-bold">{company.name}</span> */}
        </div>
      </div>
      {/* Company detail */}
      <div className="bg-[#E4EFFF] py-8 w-full lg:px-[120px] px-[30px]">
        {/* Company Logo and Name*/}
        <div className="flex flex-row mb-2">
          <div className="w-[64px] h-[64px] rounded-full bg-purple-200 text-white text-[20px] font-inter font-bold flex items-center justify-center mr-2">
            {/* {company.name.charAt(0)} */}
          </div>
          <div className="font- inter font-bold text-[32px] text-[#001A45] ">
            {/* {company.name} */}
          </div>
        </div>
        {/* Rating and Reviews */}
        <div className="flex flex-row text-sm gap-2 mb-3">
          <div className="bg-[#C9FF57] w-5 h-5 rounded-md flex items-center justify-center">
            {/* <img src={star} /> */}
          </div>
          {/* <div>{company.rating ? company.rating : "0"}/100</div> */}
          {/* <div>{company.complaints.length} reviews</div> */}
        </div>
        {/* Company info */}
        <div className="flex flex-col gap-3">
          {/* <p>{company.email}</p> */}
          {/* <p>{company.phone}</p> */}
          <div className="flex flex-row gap-2 text-[#0450CF] hover:underline">
            {/* <img src={wwwglobus} /> */}
            {/* <p>{company.website}</p> */}
          </div>
        </div>
      </div>

      {/* Complaints  */}
      <div className="lg:mx-[120px] mt-2 text-[#001A45] mx-[30px]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Complaints</h1>
          <div className="flex flex-row mt-[12px] gap-2">
            {/* <p className="font-bold">{company.complaints.length} complaints</p> */}
            <p className="opacity-70">Over the past year</p>
          </div>
          {/* Filter */}
          <div className="mt-[24px] flex flex-row gap-2 text-base font-bold">
            {/* <img src={filtericon} /> */}
            <p>Filter</p>
          </div>
        </div>

        {/* Complaints Components */}
        <div className="flex flex-row gap-4 mt-8 flex-wrap">
          {/* {company.complaints.map((complaint, index) => (
            <ComplaintComponent key={index} complaint={complaint} />
          ))} */}
        </div>
      </div>
    </div>
  );
};
