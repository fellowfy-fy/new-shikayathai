import React from "react";

export interface Company {
  id: string;
  name: string;
}

interface CompanySearchProps {
  company: string;
  companies: Company[];
  onCompanyChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCompanySelect?: (companyName: string) => void;
}

export const CompanySearch: React.FC<CompanySearchProps> = ({
  company,
  companies,
  onCompanyChange,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="company"
        className="block font-bold mb-[4px] font-inter text-[24px] text-[#001A45]"
      >
        Company Name
      </label>
      <p className="text-sm mb-2 font-inter text-[#001A45]">
        Please enter the name of the company you are complaining about.
      </p>
      <input
        type="text"
        id="company"
        value={company}
        onChange={onCompanyChange}
        placeholder="Search for company"
        className="block w-full px-3 py-2 border border-[#001A45] rounded-[12px] border-opacity-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-[#0450CF] placeholder-opacity-30"
        required
      />
      {companies.length > 0 && (
        <div className="absolute z-10 mt-2 w-[750px] bg-white border border-[#ccc] rounded-lg shadow-lg max-h-[200px] overflow-auto">
          <ul className="list-none p-0 m-0">
            {companies.map((comp) => (
              <li
                key={comp.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                // onClick={() => onCompanySelect(comp.name)}
              >
                {comp.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
