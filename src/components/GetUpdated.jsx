import React from "react";
import CustomSolidButton from "./common/CustomSolidButton";
import CustomInput from "./common/CustomInput";
import CustomSelect from "./common/CustomSelect";
import { Institution } from "./common/Helper";

const GetUpdated = () => {
  const options = [
    { value: "option1", label: "California" },
    { value: "option1", label: "England" },
    { value: "option2", label: "Australia" },
    { value: "option3", label: "Canada" },
    { value: "option3", label: "Germany" },
    { value: "option3", label: "New York" },
    { value: "option3", label: "Russia" },
  ];
  return (
    <div className="bg-[url('/assets/images/background/get_updated.webp')] bg-contain lg:bg-cover bg-no-repeat">
      <div className="container xl:max-w-[970px] mx-auto xl:px-0 px-3 py-[62px]">
        <div className="bg-white sm:py-[54px] py-10 lg:px-[181px] sm:px-20 px-4">
          <p className="text-center text-onxy font-georgia text-2xl font-normal leading-120 tracking-[7.2px] mb-0">
            GET UPDATED WITH US
          </p>
          <p className="pt-4 max-w-[468px] text-center mb-0 text-primary-blue font-georgia text-40 font-normal leading-120 mx-auto">
            Request <span className="text-primary-orange">Your Free</span>{" "}
            Consultation
          </p>
          <p className="pt-7 mb-0 text-center text-onxy opacity-80 font-georgia text-base font-normal max-w-[463px] mx-auto leading-normal">
            Send us an email or{" "}
            <span className="text-primary-orange text-center">
              call (800) 700-8450
            </span>{" "}
            for answers to anything and everything you would like to know about
            your case.
          </p>
          <div className="pt-10 flex sm:flex-row flex-col gap-10 justify-center">
            <div className="sm:w-1/2">
              <CustomInput
                label="first name"
                placeholder="first name"
                type="text"
              />
            </div>
            <div className="sm:w-1/2">
              <CustomInput
                label="last name"
                placeholder="last name"
                type="text"
              />
            </div>
          </div>
          <div className="pt-[30px] flex sm:flex-row flex-col gap-10 justify-center">
            <div className="sm:w-1/2">
              <CustomInput
                label="Phone Number"
                placeholder="Phone Number"
                type="number"
              />
            </div>
            <div className="sm:w-1/2">
              <CustomInput
                label="Email"
                placeholder="Email address"
                type="email"
              />
            </div>
          </div>
          {/* custom select  */}
          <div className="pt-[30px]">
            <CustomSelect label="City" options={options} />
          </div>

          <div className="max-w-[579px] mx-auto pt-7">
            <p className="text-black text-xl font-georgia-bold font-bold leading-normal pb-[10px] mb-0">
              Institution Involved <span className="text-light_blue">*</span>
            </p>
            {Institution.map((value, index) => (
              <div
                key={index}
                className="flex sm:flex-row flex-col sm:pt-[18px] pt-4 justify-between sm:items-center"
              >
                <div className="flex gap-3 items-center md:w-1/5 sm:w-1/2">
                  <input type="radio" />
                  <p className="text-onxy font-georgia-bold text-base font-bold leading-normal">
                    {value.leftTitle}
                  </p>
                </div>
                <div className="flex gap-3 items-center sm:pt-0 pt-4 md:w-2/5 sm:w-1/2">
                  <input type="radio" />
                  <p className="text-onxy font-georgia-bold text-base font-bold leading-normal">
                    {value.rightTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-7">
            <label
              className="capitalize text-onxy font-georgia text-base font-normal leading-normal"
              htmlFor=""
            >
              Reason for inquiry
            </label>
            <textarea
              className="mt-[10px] w-full text-onxy font-georgia text-base font-normal min-h-[135px] leading-normal opacity-40 p-4 rounded bg-white capitalize border-[1px] border-gray_goose outline-none"
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
              placeholder="Reason for inquiry"
            ></textarea>
          </div>
          <p className="pt-7 text-center text-primary-orange font-georgia-bold text-xl font-bold leading-normal mb-0">
            Disclaimer*
          </p>
          <p className="pt-[10px] max-w-[608px] mx-auto text-onxy font-georgia text-base font-normal leading-normal opacity-80 text-center mb-0">
            The use of this website or contact form to communicate with this
            firm or any of its attorneys/members does not establish an
            attorney-client relationship. Time-sensitive information should not
            be sent through this form. All information provided will be kept
            strictly confidential.
          </p>
          <div className="pt-6 flex gap-2 items-center justify-center">
            <input type="checkbox" />
            <p className="text-primary-blue font-georgia text-xs font-normal leading-normal opacity-70 mb-0">
              I HAVE READ THIS DISCLAIMER
            </p>
          </div>
          <div className="pt-12 text-center">
            <CustomSolidButton content="Send Message" type="sumbit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdated;
