import React from "react";
import CustomSolidButton from "./common/CustomSolidButton";
import Image from "next/image";

const California = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 pt-40">
      <div className="bg-primary-blue pt-11 ps-11 lg:pe-0 pe-11 lg:pb-[62px]">
        <div className="flex lg:flex-row flex-col-reverse gap-[18px]">
          <div className="lg:max-w-[480px] lg:translate-y-0 translate-y-[-70px]">
            <p className="text-white mb-0 lg:text-start text-center font-georgia text-40 font-normal leading-120">
              California{" "}
              <span className="text-primary-orange">Sexual Abuse Lawyers</span>{" "}
              Who Are Here for You
            </p>
            <div className="pt-6 lg:max-w-[470px]">
              <p className="text-white font-georgia lg:text-start text-center text-base font-normal leading-normal mb-0">
                No case is too challenging for our lawyers. When we say that we
                aren’t afraid to stand up to any major institution, we have the
                track record to prove it. The firm has recovered more than $2
                billion dollars on behalf of clients from the nation’s largest
                school districts, religious institutions, municipalities, sports
                and youth organizations and Fortune 500 companies.
              </p>
              <p className="pt-7 mb-0 text-white lg:text-start text-center font-georgia text-base font-normal leading-normal">
                If you or a loved one is a survivor of sexual violence and
                abuse, please{" "}
                <span className="text-primary-orange">
                  contact our law offices in Southern California
                </span>{" "}
                for a free, 100% confidential consultation regarding your case.
              </p>
              <p className="pt-7 mb-0 text-white lg:text-start text-center font-georgia text-base font-normal leading-normal">
                You deserve closure, and any responsible parties deserve justice
                for their despicable actions. Let a trusted California sexual
                abuse lawyer at our firm help you today.
              </p>
            </div>
            <div className="pt-12 lg:text-start text-center">
              <CustomSolidButton content="Request A Free Consultation" />
            </div>
          </div>
          <div className="translate-y-[-126px]">
            <Image
              src="/assets/images/california/sexual_abuse_lawyers.webp"
              width={598}
              height={630}
              alt="sexual abuse lawyer"
              className="lg:mx-0 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default California;
