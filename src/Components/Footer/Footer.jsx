import React from "react";

export default function Footer() {
  return (
    <footer class="bg-secondaryBg mt-24">
      <div class="flex flex-wrap md:justify-between px-36 md:px-20 lg:px-36 pt-14">
        <email class="flex gap-2 justify-center">
          <img src="src/assets/message.svg" alt="" />
          <h3>support@getadentedge.com</h3>
        </email>
        <div class="flex gap-9">
          <h3>Help and Support</h3>
          <h3>Blog</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>

      <div class="flex flex-wrap md:justify-between px-36 mt-7 pb-10">
        <companyName>
          <h1>BigDigit Technologies Private Limited</h1>
        </companyName>
        <socialMediaIcon class="flex gap-5">
          <img src="src/assets/facebook-fill.svg" class="w-6 h-6" alt="" />
          <img src="src/assets/instagram-fill.svg" class="w-6 h-6" alt="" />
          <img src="src/assets/facebook-fill.svg" class="w-6 h-6" alt="" />
        </socialMediaIcon>
      </div>
    </footer>
  );
}
