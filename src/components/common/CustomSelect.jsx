"use client";
import React, { useState } from "react";

const CustomSelect = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div>
      <label className="block mb-1 font-georgia text-base font-normal text-onxy">
        {label}
      </label>
      <select
        className="border border-gray_goose mt-[10px] rounded p-4 w-full text-onxy text-base font-georgia font-normal leading-normal opacity-40 outline-none"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option
          className="text-onxy text-base font-georgia font-normal leading-normal opacity-40"
          value="California"
          disabled
        >
          Select an option
        </option>
        {options.map((option, index) => (
          <option
            className="text-onxy text-base font-georgia font-normal leading-normal opacity-40 py-2"
            key={index}
            value={option.value}
          >
            <p className="text-onxy text-base font-georgia font-normal leading-normal opacity-40 py-1">
              {option.label}
            </p>
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
