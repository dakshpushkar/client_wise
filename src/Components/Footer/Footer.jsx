import React from "react";

export default function Footer() {
  return (
    <footer class="bg-secondaryBg mt-24" id="footer">
      <div class="flex gap-3 items-baseline md:items-center flex-wrap md:justify-between px-16 md:px-20  pt-14">
        <email class="flex gap-2 justify-center">
          <img src="src/assets/message.svg" alt="" />
          <h3 className="text-xl font-normal">support@getadentedge.com</h3>
        </email>
        <div class="flex gap-3 md:gap-9 text-nowrap font-medium text-lg mt-2 md:mt-0 flex-wrap w-3/2 md:w-unset  md:flex-nowrap">
          <h3>Help and Support</h3>
          <h3>Blog</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>

      <div class="flex flex-wrap md:justify-between px-16 md:px-20 mt-7 pb-10">
        <companyName className="font-semibold text-xl md:text-3xl">
          <h1>BigDigit Technologies Private Limited</h1>
        </companyName>
        <socialMediaIcon class="flex gap-5 mt-2">
          <img src="src/assets/facebook-fill.svg" class="w-6 h-6" alt="" />
          <img src="src/assets/instagram-fill.svg" class="w-6 h-6" alt="" />
          <img src="src/assets/facebook-fill.svg" class="w-6 h-6" alt="" />
        </socialMediaIcon>
      </div>
    </footer>
  );
}
