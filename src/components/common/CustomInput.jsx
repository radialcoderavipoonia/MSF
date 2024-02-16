import React from "react";

const CustomInput = ({ label, type, placeholder }) => {
  return (
    <div>
      <label className="capitalize text-onxy font-georgia text-base font-normal leading-normal" htmlFor={placeholder}>{label}</label>
      <input className="mt-[10px] w-full text-onxy font-georgia text-base font-normal leading-normal opacity-40 p-4 rounded bg-white capitalize border-[1px] border-gray_goose outline-none" type={type} placeholder={placeholder} id={placeholder} />
    </div>
  );
};

export default CustomInput;
