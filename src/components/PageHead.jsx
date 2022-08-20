import React from "react";
import { PostState } from "../context/Context";
function PageHead({ page }) {
  const { darkMode } = PostState();
  return (
    <div className="h-20 flex items-center px-5">
      <h1
        className={`text-3xl font-bold ${
          darkMode ? "text-gray-100" : "text-black"
        }`}
      >
        {page}
      </h1>
    </div>
  );
}

export default PageHead;
