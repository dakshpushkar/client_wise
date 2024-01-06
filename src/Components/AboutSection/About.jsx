import React from "react";

export default function About() {
  return (
    <about>
      <div class="flex justify-center  mt-14 md:mt-28 px-10 md:px-10">
        <aboutContainer class="relative w-[1120px] h-[720px] rounded-3xl overflow-hidden">
          <img
            src="src/assets/Rectangle 13.svg"
            class="w-full h-full object-cover"
            alt=""
          />
          <img
            src="src/assets/Group (1).svg"
            class="absolute top-[-10px] right-[-40px] w-32 h-28 z-10"
            alt="Small Image"
          />
          <headigContainer class="flex justify-center">
            <headig class="absolute top-[64px] text-white font-bold  text-2xl md:text-4xl">
              What are we?
            </headig>
            <div class="absolute w-[56px] h-[2px] top-[137px] rounded-md bg-white"></div>
          </headigContainer>k,
          <paraContainer class="absolute  top-[180px] md:top-[216px] mx-14 md:mx-24 flex flex-col gap-6 md:gap-8">
            <p class="text-white font-normal text-sm md:text-2xl">
              We are a group of ex-startup founders, technology and design
              experts and most importantly,{" "}
              <span class="font-bold">insurance agents ourselves</span>. We have
              a combined experience of over 25+ years working in technology and
              insurance industries
            </p>
            <p class="text-white font-normal text-2xl">
              We feel the pain of converting a lead to a client, building trust
              and relationship and search through old potential leads for fresh
              follow ups and interactions.
            </p>
            <p class="text-white font-normal text-2xl">
              To cater to all these aspects and many more, we have started
              building AgentEdge for the community.
            </p>
            <p class="text-white font-normal text-2xl">
              Feedbacks are more than welcome at <span class="font-bold">feedbacks@getagentedge.com</span>
            </p>
            <p class="text-white font-normal text-2xl">
            Based on estimates of re-engagement of clients not converted in
              first meeting
            </p>

          </paraContainer>
        </aboutContainer>
      </div>
    </about>
  );
}
