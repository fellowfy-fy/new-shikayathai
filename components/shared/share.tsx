"use client";
import React, { useState } from "react";
import useModalStore from "@/store/modal";
// import close from "../../assets/close.svg";
// import facebook from "../../assets/facebookLogo.svg";
// import copy from "../../assets/ico-copy.svg";
// import linkedin from "../../assets/linkedinLogo.svg";

interface ShareProps {
  link: string;
  linkid?: string;
}

export const Share: React.FC<ShareProps> = ({ link, linkid }) => {
  const { hideModal } = useModalStore();
  const [copied, setCopied] = useState(false);

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      link
    )}`;
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      link
    )}`;
    window.open(url, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSkip = () => {
    window.location.href = link;
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-4 rounded-[32px] max-w-[800px] w-full relative">
        <div className="w-[257px] h-4 flex justify-between items-center z-10 ">
          {/* Fully Opaque Part */}
          <div className="absolute top-[1.90rem] left-[25px] w-[90px] h-1 bg-[#0450CF] z-10"></div>

          {/* Semi-Transparent Part */}
          <div className="absolute top-[1.90rem] left-[25px]  w-[250px] h-1 bg-[#0450CF]"></div>

          {/* Dots */}
          <div className="absolute left-6 top-6 w-[257px] flex justify-between items-center z-30">
            <div className="rounded-full bg-[#0450CF] w-4 h-4 z-20"></div>
            <div className="rounded-full bg-[#0450CF] w-4 h-4 z-20"></div>
            <div className="rounded-full bg-[#0450CF] w-4 h-4 z-50"></div>
          </div>
          <button
            className="absolute top-6 right-6 text-lg font-bold"
            onClick={hideModal}
          >
            {/* <img src={close} alt="Close" /> */}
          </button>
        </div>
        <div className="text-sm md:text-base leading-relaxed p-4 mt-5 text-[#03132F]">
          <p className="font-unbounded font-bold text-2xl">
            Share your complaint with others in Facebook
          </p>
          <p>
            Share your complaint on social networks, the more people see it, the
            more chances there are for its speedy resolution
          </p>
        </div>
        <div className="w-full relative p-3 border rounded-[12px] border-[#001A45B2] border-opacity-70 mt-5">
          <input
            type="text"
            readOnly
            value={link}
            className="link-input w-1/2"
          />
          <button className="absolute right-3" onClick={handleCopy}>
            {/* <img src={copy} alt="Copy" /> */}
          </button>
          {copied && (
            <span className="absolute right-10 top-3 text-green-500">
              Copied!
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <button
            className="lg:h-[56px]  w-full py-2 mt-4 bg-[#001A45] text-white rounded-xl transition duration-150 ease-in-out flex flex-row justify-center items-center gap-2 font-inter text-lg hover:bg-opacity-70 active:bg-black"
            onClick={shareOnFacebook}
          >
            {/* <img src={facebook} alt="Facebook" /> */}
            Share
          </button>
          <button
            className="lg:h-[56px]  w-full py-2 mt-4 bg-[#001A45] text-white rounded-xl transition duration-150 ease-in-out flex flex-row justify-center items-center gap-2 font-inter text-lg hover:bg-opacity-70 active:bg-black"
            onClick={shareOnLinkedIn}
          >
            {/* <img src={linkedin} alt="LinkedIn" /> */}
            Share
          </button>
        </div>
        <button
          className="lg:h-[56px] w-full py-4 mt-5 bg-white border border-[#001A45] text-[#001A45] rounded-xl transition duration-150 ease-in-out font-inter hover:border-opacity-70 hover:text-opacity-70 active:border-opacity-70 active:text-opacity-70 active:bg-opacity-5"
          onClick={handleSkip}
        >
          Skip
        </button>
      </div>
    </div>
  );
};
