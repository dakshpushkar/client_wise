import React, { useState } from "react";

export const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const handleToggleMobileMenu = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-14 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />

          {/* Hamburger menu for small screens */}
          <div className="lg:hidden">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={showHamburger}
              onClick={handleToggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
                {/* ... (your SVG path) ... */}
              </svg>
            </button>
          </div>

          {/* Header links for larger screens */}
          <div className="hidden md:flex max-auto items-center">
            <div className="flex items-center gap-10">
              <h3 className="text-secondary md:text-[18px] font-medium">
                Key Benefits
              </h3>
              <h3 className="text-secondary md:text-[18px] font-medium">
                Blog
              </h3>
              <h3 className="text-secondary md:text-[18px] font-medium">
                Contact
              </h3>
            </div>

            <div className="flex items-center ml-10">
              <button className="text-white font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary">
                Get App for Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-white z-50 overflow-hidden ${
          showHamburger ? "visible" : "hidden"
        }`}
        id="mobile-menu-2"
      >
        {/* Mobile menu content */}
        <div className="flex justify-end items-center h-16 px-4 py-2">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={showHamburger}
            onClick={handleToggleMobileMenu}
          >
            <span className="sr-only">Close mobile menu</span>
            <svg
              className="w-8 h-8"
              fill="red"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu links */}
        <div className="flex flex-col items-center">
          <h3 className="text-secondary md:text-[18px] font-medium mt-4">
            Key Benefits
          </h3>
          <h3 className="text-secondary md:text-[18px] font-medium mt-4">
            Blog
          </h3>
          <h3 className="text-secondary md:text-[18px] font-medium mt-4">
            Contact
          </h3>

          <div className="mt-4">
            <button className="text-white font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary">
              Get App for Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
