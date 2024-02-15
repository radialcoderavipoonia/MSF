"use client"; // Comment indicating module usage
import React from "react";

// CustomTransparentButton component definition
const CustomTransparentButton = (props) => {
  const { content } = props; // Destructuring props to extract content
  return (
    <button
      aria-label={content}
      className={`bg-transparent font-georgia hover:bg-primary-orange border-primary-orange border-[1px] px-5 py-3 font-bold text-base text-primary-orange leading-normal hover:text-white transition-all duration-300 ease-in-out `}
    >
      {content} {/* Displaying the content */}
    </button>
  );
};

export default CustomTransparentButton; // Exporting the CustomTransparentButton component
