"use client"; // import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import api from "../../api/axios";
// import CompanyComponent from "../../pages/AllBrands/CompanyComponent";

export const TopRated = () => {
  const [companies, setCompanies] = useState(null);

  //   useEffect(() => {
  //     const fetchCompanies = async () => {
  //       try {
  //         const response = await api.get("companies/list");
  //         setCompanies(response.data.results);
  //       } catch (error) {
  //         console.error("Error fetching companies:", error);
  //       }
  //     };
  //     fetchCompanies();
  //   }, []);

  return (
    <section className="text-left lg:text-center px-[24px] lg:px-[120px] py-[40px] sm:py[80px]">
      <h2 className="text-[24px] sm:text-[32px] font-unbounded font-bold text-[#001A45] mb-4">
        Top rated companies
      </h2>
      <nav>
        <ul className="flex justify-left lg:justify-center mb-8">
          <li>
            {/* <Link
              to="/brands"
              className="text-base text-[#001A45] hover:underline"
            >
              Watch all
            </Link> */}
          </li>
        </ul>
      </nav>
      <div className="flex flex-wrap lg:justify-center gap-[8px]">
        {/* {companies.map((company, index) => (
          <CompanyComponent key={index} company={company} />
        ))} */}
      </div>
    </section>
  );
};
