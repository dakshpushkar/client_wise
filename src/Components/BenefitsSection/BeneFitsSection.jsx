import React , { useState } from "react";

export default function BeneFitsSection() {
  const [selectedKey, setSelectedKey] = useState("Dashboard");

  const displaySelectedValue = () => {
    if (selectedKey === null) {
      return "View and search all your leads, clients, by stage, status and policy";
    }

    const selectedKeyValue = keyValueArray.find(item => item.key === selectedKey);

    if (selectedKeyValue) {
      return selectedKeyValue.value;
    } else {
      return "Key not found";
    }
  };
  // Creating an array of key-value pairs
  const keyValueArray = [
    {
      key: "Dashboard",
      value:
        "View and search all your leads, clients, by stage, status and policy",
    },
    {
      key: "Client Profiles",
      value:
        "View status of each client, from lead stage to converted, view policy details, anytime",
    },
    {
      key: "Policy Center",
      value:
        "Get AI-generated Summary of All types of Insurance Policies, share with potential clients for greater trust and relationship building",
    },
    {
      key: "Insights",
      value:
        "Which clients are more likely to buy again, which client can increase premium, get all such AI-generated recommendations at your fingertips",
    },
    // Add more key-value pairs as needed
  ];



  return (
    <div class="mt-4 md:mt-14 lg:mt-24" id="benefitsSection">
      <div class="text-center">
        <p class="text-secondary px-10 py-10 md:px-0 md:py-0 font-bold text-2xl md:text-3xl lg:text-4xl">
          All prospects, leads, clients at your fingertips, lifelong for free{" "}
        </p>
      </div>
      {/* <!-- First div for below of md screen --> */}

      <div class="mx-10 flex justify-center">
        <div class="w-full flex overflow-x-auto md:hidden">
          <div class="flex gap-5 justify-center">
            {keyValueArray.map((items) => (
                <div
                key={items.key}
                className={`flex items-center mb-4 gap-2 cursor-pointer ${selectedKey === items.key ? 'bg-primary text-white rounded' : ''}`}
                onClick={() => setSelectedKey(items.key)}
              >
                <p className=" font-medium text-nowrap text-base p-1">
                  {items.key}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="p-5 sm:p-10 md:p-20 flex flex-col-reverse sm:flex-row sm:justify-around gap-5 justify-center items-center">
        {/* <!-- First div for above of md screen --> */}
        <div class="w-full sm:w-1/3 md:flex flex-col justify-center items-center hidden">
          <div class="overflow-y-scroll max-h-[167px] w-full sm:w-[257px] scrollbar-thin scrollbar-blue-500">
            {keyValueArray.map((items) => (
             <div
             key={items.key}
             className={`flex items-center w-fit mb-4 gap-2 cursor-pointer ${selectedKey === items.key ? 'bg-primary text-white rounded' : ''}`}
             onClick={() => setSelectedKey(items.key)}
           >
             <img
               src="src/assets/Ellipse 106.svg"
               className="w-11 h-11 p-2"
               alt=""
             />
             <p className="font-medium text-base p-2">
               {items.key}
             </p>
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
            {selectedKey}
            </h2>
            <p class="text-secondaryGray text-xl text-center md:text-start sm:text-2xl lg:text-3xl font-normal opacity-70 mt-4 ">
              {displaySelectedValue()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
