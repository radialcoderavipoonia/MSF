"use client"; // Comment indicating module usage
import React from "react";

// CustomTransparentButton component definition
const CustomTransparentButton = (props) => {
  const { content } = props; // Destructuring props to extract content
  return (
    <button
      aria-label={content}
      className={`font-bold font-georgia lg:text-base text-sm bg-transparent whitespace-nowrap text-white border-white border rounded-[41px] p-[13px_46px] relative z-10 `}
    >
      {content} {/* Displaying the content */}
    </button>
  );
};

export default CustomTransparentButton; // Exporting the CustomTransparentButton component
