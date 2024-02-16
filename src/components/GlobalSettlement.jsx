import React from "react";
import { Settlement } from "./common/Helper";

const GlobalSettlement = () => {
  return (
    <div>
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 py-16">
        <p className="text-primary-blue font-georgia text-40 leading-120 font-normal mb-0">
          Global <span className="text-primary-orange">Settlement</span>
        </p>
        <p className="max-w-[550px] pt-7 text-onxy font-georgia text-base font-normal leading-normal opacity-80">
          $216 million global settlement of 110 separate sexual abuse claims
          against the Society of Jesus, Oregon Province (2007, 2011). Various
          Superior Courts in the State of Alaska and U.S. Bankruptcy Court.
        </p>
        <div className="pt-[74px] pb-9">
          <div className="flex flex-wrap justify-center gap-4">
            {Settlement.map((value, index) => (
              <div
                key={index}
                className="w-[266px] h-[293px] flex justify-center items-center bg-white border-[1px] border-primary-blue group hover:bg-primary-blue hover:border-transparent transition-all duration-300 "
              >
                <div className="max-w-[211px]">
                  <p className="text-center text-primary-blue font-georgia text-6xl font-normal leading-110 mb-0 group-hover:text-white">
                    {value.title}
                  </p>
                  <p className="text-center pt-[14px] text-onxy font-georgia text-xl font-bold leading-normal mb-0 group-hover:text-white ">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettlement;
