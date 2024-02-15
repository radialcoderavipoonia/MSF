import React from "react";

// CustomSolidButton component definition
const CustomSolidButton = (props) => {
  // Destructuring props to extract content
  const { content } = props;

  return (
    <button
      aria-label={content}
      className={`bg-primary-orange font-georgia px-5 py-3 font-bold text-base text-white leading-normal border-0 `}
    >
      {content} {/* Displaying the content */}
    </button>
  );
};

export default CustomSolidButton; // Exporting the CustomSolidButton component
