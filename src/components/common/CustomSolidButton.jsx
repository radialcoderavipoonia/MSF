import React from "react";

// CustomSolidButton component definition
const CustomSolidButton = (props) => {
  // Destructuring props to extract content
  const { content, type } = props;

  return (
    <button
      type={type}
      aria-label={content}
      className={`bg-primary-orange font-georgia hover:bg-transparent border-transparent hover:border-primary-orange border-[1px] px-5 py-3 font-bold text-base text-white leading-normal hover:text-primary-orange transition-all duration-300 ease-in-out `}
    >
      {content} {/* Displaying the content */}
    </button>
  );
};

export default CustomSolidButton; // Exporting the CustomSolidButton component
