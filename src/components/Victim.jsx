import React from "react";
import CustomSolidButton from "./common/CustomSolidButton";
import Image from "next/image";

const Victim = () => {
  return (
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 pt-12 relative ">
      <div className="relative z-30">
         <div className="flex lg:flex-row flex-col lg:items-end items-center md:gap-[68px] sm:gap-12 gap-10">
          <div>
            <p className="text-primary-blue font-georgia lg:text-start text-center text-40 font-normal leading-120 mb-0">
              Were you a <span className="text-primary-orange">victim</span> of
            </p>
            <p className="text-onxy xl:pt-7 lg:pt-6 md:pt-5 pt-4 text-base font-georgia font-normal lg:text-start text-center leading-normal opacity-80 lg:max-w-[473px] mb-0 lg:pb-12 pb-6">
              At Manly Stewart, we understand the profound impact that sexual
              abuse can have on survivors. We are dedicated to providing
              compassionate and unwavering support to those who have endured
              such traumatic experiences.
            </p>
            <div className="lg:text-start text-center">
              <CustomSolidButton content="Take Action Now" />
            </div>
          </div>
          <p className="text-onxy text-2xl font-georgia md:text-start text-center font-normal leading-120 tracking-[7.2px]">
            Breaking Cases
          </p>
        </div>
        <div className="max-w-[948px] ms-auto pt-8 flex md:flex-row flex-col md:gap-8">
          <div className="relative">
            <Image
              src="/assets/images/victim/juvenile_probation_camp_woman.webp"
              width={458}
              height={564}
              alt="victim woman image"
              className="xl:w-[458px] xl:h-[564px] w-full h-full"
            />
            <div className="w-full flex items-center absolute left-0 bottom-0 md:py-0 sm:py-4 py-3">
              <div className="bg-white lg:w-1/2 w-[30%]">
                <p className="text-onxy font-georgia lg:text-80 text-5xl font-normal lg:text-end text-center leading-110 lg:pe-11 px-3 pt-3 pb-4 mb-0">
                  01
                </p>
              </div>
              <div className="lg:max-w-[192px] mx-auto">
                <p className=" text-white font-georgia text-base font-normal leading-normal pt-5 lg:pb-[38px] lg:pe-3 md:px-3 sm:px-8 px-6 md:pb-8 pb-4">
                  Los Angeles County Juvenile Probation Camp Sexual Assault
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/victim/california_schools_child.webp"
              width={458}
              height={564}
              alt="victim child image"
              className="xl:w-[458px] xl:h-[564px] w-full h-full"
            />
            <div className="w-full flex items-center absolute left-0 bottom-0 md:py-0 sm:py-4 py-3">
              <div className="bg-white lg:w-1/2 w-[30%]">
                <p className="text-onxy font-georgia lg:text-80 text-5xl font-normal lg:text-end text-center leading-110 lg:pe-11 px-3 pt-3 pb-4 mb-0">
                  02
                </p>
              </div>
              <div className="lg:max-w-[204px] mx-auto">
                <p className=" text-white font-georgia text-base font-normal leading-normal pt-5 lg:pb-[38px] lg:pe-3 md:px-3 sm:px-8 px-6 md:pb-8 pb   -4">
                  California Schools Sexual Abuse
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
        <div className="bg-harp w-[500%] h-[546px] absolute top-0 lg:right-[97px] right-0"></div>
      </div>
  );
};

export default Victim;
