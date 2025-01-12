"use client";
import { useEffect, useState, useRef } from "react";
// import FrameSolvedComponent from "../FrameComponent/FrameSolvedComponent.jsx";
// import api from "../../api/axios";
// import { Link } from "react-router-dom";
// import arrow from "../../assets/arrow.svg";

export function RecentReactions() {
  const [requests, setRequests] = useState([]);
  const scrollContainerRef = useRef(null);

  //   const scroll = (direction) => {
  //     if (scrollContainerRef.current) {
  //       const { current: scrollContainer } = scrollContainerRef;
  //       if (direction === "left") {
  //         scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
  //       } else {
  //         scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     const fetchRequests = async () => {
  //       try {
  //         const response = await api.get("/complaints/list/solved/");
  //         setRequests(response.data.results);
  //       } catch (error) {
  //         console.error("Failed to fetch requests:", error);
  //       }
  //     };
  //     fetchRequests();
  //   }, []);

  return (
    <div className="text-left xl:text-center sm:py-[80px] pl-[24px] xl:ml-[120px] pt-10 bg-white relative">
      <h2 className="text-[24px] sm:text-[32px] pr-[24px] sm:pr-[120px] font-bold text-[#001A45] font-unbounded mb-4">
        Recent Reactions
      </h2>
      {/* <Link
        to="complaints"
        className="text-[#001A45] pr-[24px] sm:pr-[120px] hover:underline"
      >
        Watch all
      </Link> */}
      {requests.length > 0 ? (
        <div className="relative">
          <button
            // onClick={() => scroll("left")}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rotate-180 rounded-[16px] w-[40px] h-[40px] z-10 hidden lg:block"
          >
            {/* <img src={arrow} alt="Scroll Left" /> */}
          </button>
          <div
            className="overflow-x-auto scrollbar-hide"
            ref={scrollContainerRef}
          >
            <div className="flex space-x-2 sm:space-x-8">
              {/* {requests.map((request, index) => (
                <FrameSolvedComponent
                  key={index}
                  data={request}
                  className="min-w-[16rem]"
                />
              ))} */}
            </div>
          </div>
          <button
            // onClick={() => scroll("right")}
            className="absolute right-[24px] sm:right-[120px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-[16px] w-[40px] h-[40px] hidden lg:block"
          >
            {/* <img src={arrow} alt="Scroll Right" /> */}
          </button>
        </div>
      ) : (
        <p className="text-[#001A45] pr-[24px] sm:pr-[120px]">
          No recent reactions available.
        </p>
      )}
    </div>
  );
}
