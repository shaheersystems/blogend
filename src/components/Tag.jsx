import React from "react";
import { PostState } from "../context/Context";
function Tag({ text }) {
  const { darkMode } = PostState();
  return (
    <span
      className={`py-1 px-3 ${
        darkMode
          ? "bg-gray-500 text-white hover:bg-gray-700"
          : "bg-gray-200 hover:bg-gray-300"
      } rounded-full cursor-pointer `}
    >
      {text}
    </span>
  );
}

export default Tag;
