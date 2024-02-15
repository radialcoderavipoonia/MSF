import Image from "next/image";
import React from "react";
import CustomSolidButton from "./common/CustomSolidButton";

const Attorneys = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 lg:py-[154px] md:py-20 sm:py-16 py-12">
      <div className="flex lg:flex-row flex-col-reverse gap-6">
        <Image
          src="/assets/images/attorneys/girl.png"
          width={485}
          height={475}
          alt="attorneys girl image"
          className="w-[485px] h-[475px] lg:block hidden"
        />
        <Image
          src="/assets/images/attorneys/girl_small_screen.png"
          width={485}
          height={475}
          alt="attorneys girl image"
          className="sm:w-[485px] sm:h-[475px] lg:hidden block mx-auto"
        />
        <div className="xl:pt-16 lg:pt-10">
          <div className="pt-3 lg:translate-x-[-54px]">
            <p className="text-onxy text-xl font-normal lg:text-start text-center leading-120 tracking-[6px] font-georgia mb-0">
              Attorneys
            </p>
            <p className="pt-3 mb-0 pb-1 lg:text-start text-center text-primary-blue text-40 font-georgia font-normal leading-120">
              Refer Your{" "}
              <span className="text-primary-orange">Sexual Abuse Case</span> to
              Us
            </p>
          </div>
          <p className="lg:pt-14 pt-6 text-onxy text-base font-normal lg:text-start text-center leading-normal opacity-80 font-georgia lg:max-w-[578px]">
            Give us a call regarding the potential referral of your sexual abuse
            case. We will provide, free-of charge, a thoughtful and reasoned
            evaluation of your potential or pending case.
          </p>
          <div className="lg:pt-12 pt-6 lg:text-start text-center">
            <CustomSolidButton content="Join Our Team Today" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attorneys;
