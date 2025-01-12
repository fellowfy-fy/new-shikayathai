"use client";
// import { useModal } from "../../context/ModalContext";
// import { Registration, Login } from ".";
// import useModalStore from "@/store/modal";
import { useState } from "react";

export const Header = () => {
  // const { showModal } = useModalStore();
  //   const { auth } = useContext(AuthContext);
  //   const { showModal } = useModal();

  //   const handleRegisterClick = () => {
  //     showModal(<RegistrationComponent />);
  //   };

  //   const handleLoginClick = () => {
  //     showModal(<LoginComponent />);
  //   };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[rgb(0,26,69)] text-white md:h-12 md:w-full md:flex md:items-center md:justify-center">
      <nav className="container  h-full flex items-center justify-between w-full">
        <img src="/logo.svg" alt="Logo" className="w-6 mr-2" />
        <span className="font-unbounded font-bold text-[18px]">Shikayahai</span>

        <div
          className="hidden md:flex md:items-center lg:justify-center w-full"
          id="navbarNav"
        >
          <ul className="flex justify-center items-center flex-grow">
            <li>
              {/* <Link
                className="font-inter text-white hover:text-[#FFD2BE] mx-4"
                to="/"
              >
                Home
              </Link> */}
            </li>
            <li>
              {/* <Link
                className="font-inter text-white hover:text-[#FFD2BE] mx-4"
                to="/brands"
              >
                All brands
              </Link> */}
            </li>
            <li>
              {/* <Link
                className="font-inter text-white hover:text-[#FFD2BE] mx-4"
                to="/complaints"
              >
                All Complaints
              </Link> */}
            </li>
          </ul>
          {/* {!auth.name ? (
            <div className="flex">
              <button
                onClick={handleRegisterClick}
                className="bg-transparent hover:bg-transparent text-white hover:text-[#FFD2BE] font-inter py-2 px-4 rounded mx-2"
              >
                Register
              </button>
              <button
                onClick={handleLoginClick}
                className="bg-transparent hover:bg-transparent text-white hover:text-[#FFD2BE] font-inter py-2 px-4 rounded"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                className="bg-transparent text-white font-inter py-2 px-4 rounded mx-2"
                to="/profile"
              >
                {auth.name}
              </Link>
              <img
                className="rounded-full w-8 h-8"
                src={auth.userpic}
                alt="User"
              />
            </div>
          )} */}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-[11px] py-[24px] items-left px-[24px] bg-[rgb(0,26,69)] text-white w-full">
            <li>
              {/* <Link
                className="font-unbounded font-medium text-[18px] text-white hover:text-gray-400 py-2"
                to="/"
                onClick={toggleMobileMenu}
              >
                Home
              </Link> */}
            </li>
            <li>
              {/* <Link
                className="font-unbounded font-medium text-[18px] text-white hover:text-gray-400 py-2"
                to="/brands"
                onClick={toggleMobileMenu}
              >
                All brands
              </Link> */}
            </li>
            <li>
              {/* <Link
                className="font-unbounded font-medium text-[18px] text-white hover:text-gray-400 py-2"
                to="/complaints"
                onClick={toggleMobileMenu}
              >
                All Complaints
              </Link> */}
            </li>
            {/* {!auth.name ? (
              <div className="flex flex-col items-left py-2">
                <button
                  onClick={handleRegisterClick}
                  className="font-unbounded font-medium text-left text-[18px] text-white hover:text-gray-400 py-2"
                >
                  Register
                </button>
                <button
                  onClick={handleLoginClick}
                  className="font-unbounded font-medium text-left text-[18px] text-white hover:text-gray-400 py-2"
                >
                  Login
                </button>
              </div>
            ) : (
              <li>
                <Link
                  className="font-unbounded font-medium text-[18px] text-white hover:text-gray-400 py-2"
                  to="/profile"
                  onClick={toggleMobileMenu}
                >
                  Profile
                </Link>
              </li>
            )} */}
          </ul>
        </div>
      )}
    </header>
  );
};
