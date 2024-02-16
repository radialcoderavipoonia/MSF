import React from "react";
import { BlueRightIcon, OrangeRightIcon } from "./common/Icons";
import { Liable, SexualViolence } from "./common/Helper";
import Image from "next/image";

const Representation = () => {
  return (
    <div>
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 pt-[154px]">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:max-w-[573px] pt-3">
            <p className="text-onxy font-georgia lg:text-start text-center text-xl font-normal leading-120 tracking-[6px] mb-0">
              Representation for
            </p>
            <p className="pt-4 mb-0 text-primary-blue lg:text-start text-center font-georgia text-40 font-normal leading-120 ">
              Sexual Abuse{" "}
              <span className="text-primary-orange">Victims Across</span>{" "}
              California
            </p>
            <p className="pt-4 mb-0 text-onxy font-georgia lg:text-start text-center text-base font-normal leading-normal opacity-80">
              Our California sexual abuse lawyers have over 20 years of
              experience litigating various cases of sexual violence. This
              includes instances of:
            </p>
            <div className="pt-4 pb-7">
              {SexualViolence.map((value, index) => (
                <div key={index} className="flex sm:flex-row flex-col sm:gap-10 gap-3 pt-3">
                  <div className="flex gap-3 lg:w-[242px] sm:w-1/2">
                    <span>
                      {" "}
                      <OrangeRightIcon />
                    </span>
                    <div>
                      <span className="text-onxy font-georgia text-base italic font-normal leading-normal opacity-80 me-1">
                        {value.titleLeftBlue}
                      </span>
                      <span className="text-primary-orange font-georgia text-base italic font-normal leading-normal opacity-80">
                        {value.titleLeftOrange}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 lg:w-[209px] sm:w-1/2">
                    <span>
                      {" "}
                      <OrangeRightIcon />
                    </span>
                    <div>
                      <span className="text-onxy font-georgia text-base italic font-normal leading-normal opacity-80 me-1">
                        {value.titleRightBlue}
                      </span>
                      <span className="text-primary-orange font-georgia text-base italic font-normal leading-normal opacity-80">
                        {value.titleRightOrange}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-onxy font-georgia text-base lg:text-start text-center font-normal leading-normal opacity-80">
              We are passionate about seeking justice for any and all survivors
              of sexual assault and abuse.
            </p>
            <div className="pt-[75px]">
              <Image
                src="/assets/images/representation/lawyer_women.png"
                width={542}
                height={764}
                alt="girl lawyer"
                className="lg:w-[542px] lg:h-[764px] md:w-[442px] md:h-[550px] sm:w-[380px] sm:h-[500px] w-[300px] h-[400px] lg:mx-0 mx-auto"
              />
            </div>
          </div>
          <div className="flex lg:flex-col flex-col-reverse">
            <Image
              src="/assets/images/representation/lawyer_man.png"
              width={542}
              height={753}
              alt="girl lawyer"
              className="lg:pt-0 pt-7 lg:w-[542px] lg:h-[753px] md:w-[442px] md:h-[550px] sm:w-[380px] sm:h-[500px] w-[300px] h-[400px] lg:mx-0 mx-auto"
            />
            <div className="pt-16 lg:max-w-[547px]">
              <p className="text-primary-blue  lg:text-start text-center font-georgia text-40 font-normal leading-120">
                We Pursue{" "}
                <span className="text-primary-orange">All Liable</span> Parties
              </p>
              <p className="pt-4 text-onxy font-georgia lg:text-start text-center text-base font-normal leading-normal opacity-80">
                At Manly, Stewart & Finaldi, we understand that in cases of
                sexual abuse, there are often other parties that may share
                liability for the abuser’s despicable actions. Therefore, we
                strive to hold all responsible parties accountable for their
                part in your case. This includes:
              </p>
              <div className="pt-[10px]">
                {Liable.map((value, index) => (
                  <div key={index} className="flex gap-3 items-center sm:pt-[18px] pt-3">
                    <span>
                      <BlueRightIcon />
                    </span>
                    <p className="text-onxy font-georgia text-base italic font-normal leading-normal opacity-80 mb-0">
                      {value.title}
                    </p>
                  </div>
                ))}
              </div>
              <p className="pt-7 text-onxy font-georgia lg:text-start text-center text-base gont-normal leading-normal opacity-80 mb-0">
                Any and all parties who had some direct or indirect part in your
                case deserve to be held accountable to the fullest extent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representation;
