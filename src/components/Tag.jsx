import React from "react";

function Tag({ text }) {
  return (
    <span className="py-1 px-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
      {text}
    </span>
  );
}

export default Tag;
