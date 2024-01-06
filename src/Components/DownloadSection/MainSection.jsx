import React from "react";

export default function MainSection() {
  return (
    <div class="flex justify-around flex-wrap md:flex-nowrap px-4">
    {/* <!-- First child div (60% width) with left padding --> */}
    <div class="w-full md:w-1/2 mx-auto sm:mx-10 flex justify-center items-center h-auto">
      <div class=""> 
        <h1 class="text-secondary text-2xl font-bold md:text-5xl text-center md:text-start  lg:text-6xl xl:text-7xl">
          India’s AI Powered Lead Management App for Insurance
        </h1>
        <p class="text-secondaryGray text-xl text-center md:text-start md:text-2xl lg:text-4xl font-normal opacity-70 md:mt-9 mt-3">
          The all-in-one client management app built for insurance agents.
        </p>
        <div class="flex gap-7 md:mt-16 mt-10 justify-center md:justify-start">
          <button class="text-white text-nowrap rounded font-medium text-sm px-4 md:text-xl lg:text-2xl lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary">
            <img src="" alt="" /> Download for iOS
          </button>
          <button class="text-primary text-nowrap border border-primary rounded font-medium text-sm md:text-xl lg:text-2xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  
    {/* <!-- Second child div (40% width) --> */}
    <div class="w-full md:w-1/2 lg:w-2/5 max-w-full overflow-hidden mt-4 md:mt-0">
      <img
        src="src/assets/Iphon X.svg"
        class="object-contain w-full h-auto md:h-[613px] lg:h-[713px]"
        alt=""
      />
    </div>
  </div>
  
  
  
  );
}
