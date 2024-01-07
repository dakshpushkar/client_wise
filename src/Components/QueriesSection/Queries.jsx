import React from "react";

export default function Queries() {
  return (
    <querie>
    <div class="bg-secondaryBg md:py-24 py-10">
      <div class="text-center text-2xl md:text-4xl  md:font-bold font-medium text-secondary">
        <h1>Download for Free</h1>
      </div>
      <wrapper class="flex flex-col md:flex-row  justify-center md:justify-evenly md:mt-11 mt-6">
        <leftContainer class="w-full md:w-1/3 mb-6 md:mb-0">
          <div class="text-center text-lg md:text-2xl font-medium">
            <h5>Scan QR to get your free trial today</h5>
          </div>
          <scannerImage class="justify-center flex">
            <img src="src/assets/image 82.svg" class="pt-6" alt="" />
          </scannerImage>
        </leftContainer>
        <rightContainer class="w-full md:w-auto px-10 md:px-0" >
          <div class="text-center md:text-start text-2xl font-medium">
            <h5>Submit Queries</h5>
          </div>
          <div class="pt-6">
            <form class="w-full" action="#" method="post">
              {/* <!-- Name field --> */}
              <div class="mb-6 flex items-start  flex-col md:flex-row md:items-center justify-between md:gap-10">
                <label
                  for="name"
                  class="text-sm mb-2 md:mb-0 text-levelGreen text-nowrap font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="p-2 bg-secondaryBg border border-solid border-inputBorder rounded focus:outline-none focus:ring w-full md:w-96 focus:border-blue-300"
                  // placeholder="John Doe"
                  required
                />
              </div>
  
              {/* <!-- Email field --> */}
              <div class="mb-6 items-start flex flex-col md:flex-row md:items-center justify-between md:gap-10">
                <label
                  for="email"
                  class="text-sm mb-2 md:mb-0 font-normal text-nowrap text-levelGreen"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="p-2 bg-secondaryBg border border-solid border-inputBorder rounded focus:outline-none focus:ring w-full md:w-96 focus:border-blue-300"
                  // placeholder="john.doe@example.com"
                  required
                />
              </div>
  
              {/* <!-- Mobile field --> */}
              <div class="mb-6 items-start flex flex-col md:flex-row md:items-center justify-between md:gap-10">
                <label
                  for="mobile"
                  class="text-sm  mb-2 md:mb-0 font-normal text-nowrap text-levelGreen"
                >
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  class="p-2 bg-secondaryBg border border-solid border-inputBorder rounded focus:outline-none focus:ring w-full md:w-96 focus:border-blue-300"
                  // placeholder="+9198765423"
                  required
                />
              </div>
  
              {/* <!-- Queries field --> */}
              <div class="mb-6 items-start flex flex-col md:flex-row md:items-center justify-between md:gap-10">
                <label
                  for="queries"
                  class="text-sm  mb-2 md:mb-10 font-normal text-levelGreen"
                >
                  Queries
                </label>
                <textarea
                  id="queries"
                  name="queries"
                  rows="4"
                  class="p-2 bg-secondaryBg border border-solid border-inputBorder rounded focus:outline-none focus:ring w-full md:w-96 focus:border-blue-300"
                  placeholder="Write your queries here..."
                  required
                ></textarea>
              </div>
  
              {/* <!-- Submit button --> */}
              <div class="">
                <button
                  type="submit"
                  class="md:ml-28 py-3 px-8 text-lg font-medium bg-primary text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </rightContainer>
      </wrapper>
    </div>
  </querie>
  
  );
}
