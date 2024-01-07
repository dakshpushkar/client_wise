import React from "react";

export default function MainSection() {
  return (
    <div class="flex justify-around flex-wrap md:flex-nowrap mx-4">
      {/* <!-- First child div (60% width) with left padding --> */}
      <div class="w-full md:w-1/2 mx-auto sm:mx-10 flex justify-center items-center h-auto">
        <div class="w-full">
          <h1 class="text-secondary  text-2xl font-bold md:text-5xl text-center md:text-start  xl:text-7xl">
            India’s AI Powered Lead Management App for Insurance
          </h1>
          <p class="text-secondaryGray text-xl text-center md:text-start md:text-3xl  font-normal opacity-70 md:mt-9 mt-3">
            The all-in-one client management app built for insurance agents.
          </p>
          <div class="flex flex-wrap sm:flex-nowrap gap-7 md:mt-16 mt-10 justify-center md:justify-start">
            <button class="text-white flex justify-center items-center gap-2 text-nowrap rounded font-medium text-sm px-4 md:text-xl lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
              >
                <path
                  d="M11.0837 3.68939C11.4618 3.25367 11.75 2.74756 11.9319 2.20013C12.1138 1.65269 12.1858 1.07472 12.1437 0.49939C10.9831 0.593077 9.90571 1.13895 9.14371 2.01939C8.77881 2.44137 8.50229 2.93227 8.33052 3.46303C8.15875 3.9938 8.09523 4.55363 8.14371 5.10939C8.70986 5.11411 9.26949 4.98848 9.77931 4.74225C10.2891 4.49601 10.7354 4.13576 11.0837 3.68939ZM13.6037 11.1294C13.6104 10.3631 13.8123 9.61121 14.1902 8.94459C14.5681 8.27798 15.1096 7.71865 15.7637 7.31939C15.3509 6.72463 14.8053 6.23422 14.17 5.88706C13.5347 5.53991 12.8272 5.34554 12.1037 5.31939C10.5437 5.15939 9.10371 6.22939 8.27371 6.22939C7.44371 6.22939 6.27371 5.33939 4.97371 5.35939C4.12384 5.38739 3.29573 5.63517 2.57016 6.07858C1.84458 6.52198 1.24632 7.14587 0.83371 7.88939C-0.92629 10.9494 0.38371 15.4994 2.14371 17.9694C2.94371 19.1794 3.94371 20.5494 5.26371 20.4994C6.58371 20.4494 7.01371 19.6794 8.54371 19.6794C10.0737 19.6794 10.5437 20.4994 11.8437 20.4694C13.1437 20.4394 14.0637 19.2294 14.9037 18.0194C15.4988 17.1409 15.9636 16.181 16.2837 15.1694C15.4912 14.8314 14.815 14.2687 14.3387 13.5507C13.8625 12.8327 13.6069 11.991 13.6037 11.1294Z"
                  fill="white"
                />
              </svg>
              Download for iOS
            </button>

            <button class="text-primary flex justify-center items-center gap-2 text-nowrap border border-primary rounded font-medium text-sm md:text-xl  px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 20 23"
                fill="none"
              >
                <path
                  d="M18.676 10.1523C18.3616 9.98235 15.6653 8.41789 14.6536 7.82903L14.6506 7.82703L2.39574 0.751893C2.18696 0.624446 1.95286 0.544155 1.70981 0.516639C1.46675 0.489123 1.22062 0.515045 0.988635 0.592593C0.962455 0.601993 0.937855 0.611453 0.912405 0.623103C0.853314 0.642363 0.795553 0.665486 0.739495 0.692323C0.505181 0.832377 0.312949 1.033 0.183028 1.27308C0.0531062 1.51316 -0.00970088 1.78382 0.00121487 2.05658V21.0419C-0.00622199 21.296 0.053962 21.5476 0.175613 21.7708C0.297264 21.994 0.476018 22.1809 0.693595 22.3124C0.743777 22.337 0.79548 22.3582 0.848385 22.3762C0.877315 22.3895 0.904895 22.4012 0.934745 22.4117C1.07796 22.4636 1.22878 22.4915 1.38109 22.4941C1.67359 22.4909 1.96014 22.4111 2.21215 22.2626C2.60082 22.037 14.6506 15.08 14.6506 15.08L18.6711 12.7587C18.9197 12.6342 19.1295 12.4441 19.2779 12.209C19.4263 11.9739 19.5075 11.7027 19.5129 11.4247C19.5007 11.157 19.4165 10.8975 19.2692 10.6736C19.122 10.4496 18.917 10.2695 18.676 10.1523ZM2.00121 19.3383V3.60113L9.94133 11.4602L2.00121 19.3383ZM7.01921 17.1766L11.3627 12.867L12.5123 14.0048C11.2476 14.7351 9.11095 15.9689 7.01921 17.1766V17.1766ZM11.361 10.0516L6.96315 5.6986L12.5168 8.9049L11.361 10.0516ZM14.3078 12.9683L12.7824 11.4585L14.3101 9.94268C15.0304 10.361 16.153 11.012 16.926 11.457L14.3078 12.9683Z"
                  fill="#007FFF"
                />
              </svg>
              Download for Android
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Second child div (40% width) --> */}
      <div class="w-4/5 md:w-1/2 lg:w-2/5 max-w-full overflow-hidden mt-4 md:mt-0">
        <img
          src="src/assets/Iphon X.svg"
          class="object-contain w-full h-auto md:h-[613px] lg:h-[713px]"
          alt=""
        />
      </div>
    </div>
  );
}
