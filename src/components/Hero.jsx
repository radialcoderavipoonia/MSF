import Image from "next/image";
import React from "react";
import CustomSolidButton from "./common/CustomSolidButton";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 lg:pt-[73px]">
          <div className="flex lg:flex-row flex-col-reverse gap-5 ">
            <div className="lg:w-[45%] flex lg:flex-col gap-4 lg:pb-0 pb-20 sm:flex-row items-center sm:items-stretch flex-col">
              <Image
                src="/assets/images/hero/office.webp"
                width={485}
                height={475}
                alt="hero office image"
                className="lg:w-[485px] lg:h-[475px] lg:block hidden"
              />
              {/* small screen  */}
              <Image
                src="/assets/images/hero/office_small_screen.png"
                width={385}
                height={375}
                alt="hero office image"
                className="lg:hidden block md:w-[385px] sm:w-[300px] md:h-[375px]"
              />
              <div className="lg:translate-y-[-112px]">
                <Image
                  src="/assets/images/hero/weight_balance.webp"
                  width={331}
                  height={408}
                  alt="hero balance weight image"
                  className="ms-[-1px] lg:block sm:w-[300px] md:w-[331px] hidden"
                />
                {/* small screen  */}
                <Image
                  src="/assets/images/hero/balance_weight_small_screen.png"
                  width={385}
                  height={375}
                  alt="hero balance weight image"
                  className="ms-[-1px] w-[385px] h-[375px] lg:hidden block"
                />
              </div>
            </div>
            <div className="lg:max-w-[663px] lg:w-[55%]">
              <div className="xl:pt-[83px] pt-20 lg:translate-x-[-48px]">
                <p className="text-onxy text-xl font-georgia lg:text-start text-center font-normal leading-120 tracking-[6px] mb-0">
                  Manly Stewart & Finaldi
                </p>
                <h2 className="xl:text-6xl font-georgia text-5xl pt-3 lg:text-start text-center text-primary-blue font-normal leading-110">
                  America's Premier Law Firm for
                  <span className="text-primary-orange ps-2">
                    Sexual Abuse Cases
                  </span>
                </h2>
              </div>
              <p className="text-onxy text-base font-georgia lg:text-start text-center font-normal leading-normal lg:pt-12 pt-6">
                At Manly Stewart, we understand the profound impact that sexual
                abuse can have on survivors. We are dedicated to providing
                compassionate and unwavering support to those who have endured
                such traumatic experiences.
              </p>
              <div className="lg:pt-12 pt-6 lg:pb-0 pb-12 lg:text-start text-center">
                <CustomSolidButton content="Contact Now" />
              </div>
            </div>
          </div>
        </div>
          <p className="text-primary-blue text-220 absolute left-[50px] bottom-[170px] font-georgia font-normal leading-110 opacity-[0.04] stewart_text_animation"> Stewart </p>
          <p className="absolute bottom-0 right-[144px] font-georgia text-200 leading-110 font-normal opacity-[0.05] text_webkit text-white finaldi_text_animation"> Finaldi </p>
      
      </div>
    </>
  );
};

export default Hero;
