import React from "react";

export default function BeneFitsSection() {
  const item = [
    "Dashboard",
    "Client Profiles",
    "Policy Center",
    "Insights",
    "Insights",
    "Policy Center",
  ];

  return (
    <div class="mt-16 md:mt-14 lg:mt-24" id="benefitsSection">
      <div class="text-center">
        <p class="text-secondary px-10 py-10 md:px-0 md:py-0 font-bold text-2xl md:text-3xl lg:text-4xl">
          All prospects, leads, clients at your fingertips, lifelong for free{" "}
        </p>
      </div>
      <div class="p-5 sm:p-10 md:p-20 flex flex-col sm:flex-row gap-5 justify-center items-center">
        {/* <!-- First div --> */}
        <div class="w-full sm:w-1/3 md:flex flex-col justify-center items-center hidden ">
          <div class="overflow-y-scroll max-h-[167px] w-full sm:w-[257px] scrollbar-thin scrollbar-blue-500">
            {item.map((items) => (
              <div class="flex items-center mb-4 gap-2">
                <img
                  src="src/assets/Ellipse 106.svg"
                  class="w-11 h-11"
                  alt=""
                />
                <p class="text-secondaryGray font-medium text-base">{items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- Second div --> */}
        <div class="w-full sm:w-1/3">
          <img
            src="src/assets/second_Iphon X .svg"
            class="object-contain w-full h-auto"
            alt=""
          />
        </div>

        {/* <!-- Third div --> */}
        <div class="w-full sm:w-1/3 flex justify-center items-center">
          <div>
            <h2 class="text-secondary font-semibold text-center md:text-start text-2xl sm:text-3xl lg:text-4xl">
              Dashboard
            </h2>
            <p class="text-secondaryGray text-xl text-center md:text-start sm:text-2xl lg:text-3xl font-normal opacity-70 mt-4 sm:mt-8">
              View and search all your leads, clients, by stage, status and
              policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
