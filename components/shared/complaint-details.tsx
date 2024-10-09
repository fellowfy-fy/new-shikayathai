import React from "react";

interface ComplaintDetailsProps {
  description: string;
  setDescription: (description: string) => void;
  handleInfoClick: () => void;
}

export const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({
  description,
  setDescription,
  handleInfoClick,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="description"
        className="block font-bold mb-[4px] font-inter text-[24px] text-[#001A45]"
      >
        Complaint Description
      </label>
      <p className="text-sm mb-2 font-inter text-[#001A45]">
        Include any details that will help the company identify your case and
        resolve your issue as soon as possible.
      </p>
      <p className="text-sm mb-2 font-inter text-[#001A45]">
        The complaint description is public, please don’t include any personal
        details.
        <button
          onClick={handleInfoClick}
          className="underline text-blue-600 hover:text-blue-800 ml-1"
        >
          Why is the complaint public?
        </button>
      </p>
      <textarea
        className="block w-full px-3 py-2 border border-[#001A45] rounded-[12px] border-opacity-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:border-[#0450CF] placeholder-opacity-30"
        placeholder="Describe your issue"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
    </div>
  );
};
