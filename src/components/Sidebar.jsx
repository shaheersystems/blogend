import React from "react";
import { PostState } from "../context/Context";
function Sidebar() {
  const { darkMode } = PostState();
  return (
    <div
      className={`w-72 h-screen sticky top-0 right-0  flex items-center justify-between py-6 flex-col space-y-5 border-l ${
        darkMode ? "bg-gray-900 border-gray-600" : "bg-white border-gray-300"
      }`}
    >
      <div className="flex flex-col px-3 items-center space-y-4 w-full">
        <button
          className={`py-2 px-5 rounded-full  w-full ${
            darkMode ? "bg-gray-100 text-gray-900" : " bg-gray-900 text-white"
          }`}
        >
          Get Unlimited Access
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
