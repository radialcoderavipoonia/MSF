import React from "react";
import { Settlement } from "./common/Helper";
import { DoubleComma } from "./common/Icons";

const GlobalSettlement = () => {
  return (
    <div className="relative">
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 sm:pt-16 pt-12 relative z-30">
        <div className="relative">
          <p className="text-primary-blue font-georgia text-40 leading-120 font-normal mb-0">
            Global <span className="text-primary-orange">Settlement</span>
          </p>
          <span className="absolute left-[-80px] top-[-40px] lg:block hidden">
            <DoubleComma />
          </span>
        </div>
        <p className="max-w-[550px] pb-[38px] lg:pt-7 md:pt-5 pt-4 text-onxy font-georgia text-base font-normal leading-normal opacity-80">
          $216 million global settlement of 110 separate sexual abuse claims
          against the Society of Jesus, Oregon Province (2007, 2011). Various
          Superior Courts in the State of Alaska and U.S. Bankruptcy Court.
        </p>
        <div className="lg:py-9">
          <div className="flex flex-wrap justify-center gap-4 relative">
            {Settlement.map((value, index) => {
              console.log(
                index === Settlement.length - 1,
                "gdbfvdbgdfvdcsbgdfvds"
              );
              return (
                <div
                  key={index}
                  className={`sm:w-[266px] w-[80%] z-30 h-[293px] relative flex justify-center items-center bg-white border-[1px] border-primary-blue group hover:bg-primary-blue hover:border-transparent transition-all duration-300 ${
                    index === Settlement.length - 1 ? "xl:ms-7" : ""
                  } `}
                >
                  <div className="max-w-[211px]">
                    <p className="text-center text-primary-blue font-georgia text-6xl font-normal leading-110 mb-0 group-hover:text-white">
                      {value.title}
                    </p>
                    <p className="text-center pt-[14px] text-onxy font-georgia-bold text-xl font-bold leading-normal mb-0 group-hover:text-white ">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="bg-harp w-full xl:h-[365px] h-[380px] top-[-13%] xl:left-[75%] left-[64%] absolute lg:block hidden"></div>
          </div>
        </div>
      </div>
      <div className="bg-harp h-[250px] w-full left-0 top-0 absolute"></div>
    </div>
  );
};

export default GlobalSettlement;
