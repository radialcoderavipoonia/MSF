import React from "react";
import CustomSolidButton from "./common/CustomSolidButton";

const Support = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
      <div className="bg-harp">
        <div className="max-w-[529px] mx-auto px-3 text-center py-[72px]">
          <p className="text-onxy text-2xl font-normal leading-120 tracking-[7.2px] font-georgia mb-0">Report Sexual Abuse</p>
          <p className="pt-4 text-40 font-normal leading-120 font-georgia text-primary-blue mb-0">
            Seeking <span className="text-primary-orange">Support and</span> Justice
          </p>
          <p className="pt-4 text-onxy text-base font-georgia font-normal leading-normal pb-8 mb-0">
            Give us a call regarding the potential referral of your sexual abuse
            case. We will provide, free-of charge, a thoughtful and reasoned
            evaluation of your potential or pending case.
          </p>
          <CustomSolidButton content="Join Our Team" />
        </div>
      </div>
    </div>
  );
};

export default Support;
