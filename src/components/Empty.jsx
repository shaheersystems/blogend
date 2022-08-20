import React from "react";
import { PostState } from "../context/Context";
function Empty() {
  const { darkMode } = PostState();
  return (
    <div
      className={`h-full w-full flex items-center justify-center ${
        darkMode ? "text-gray-100" : "text-gray-500"
      }`}
    >
      <h1 className="">No Saved Posts yet.</h1>
    </div>
  );
}

export default Empty;
