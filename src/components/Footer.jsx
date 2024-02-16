import React from "react";
import { FooterLogo } from "./common/Icons";

const Footer = () => {
  return (
    <div className="bg-onxy">
      <div className="container xl:max-w-[1140px] lg:px-0 px-3 mx-auto py-20">
        <div className="flex justify-between">
          <div className="w-2/5">
            <span>
              <FooterLogo />
            </span>
            <p className="pt-6 mb-0 text-white font-georgia text-sm font-normal leading-normal opacity-50 max-w-[349px]">
              Committed legal professionals offering expert guidance and
              representation. Trust us with your legal matters. Contact our team
              for personalized assistance today.
            </p>
          </div>
          <div className="w-3/5">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
