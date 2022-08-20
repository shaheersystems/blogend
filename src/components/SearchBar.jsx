import React from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import { PostState } from "../context/Context";
function SearchBar({ page }) {
  const { darkMode, setDarkMode } = PostState();
  return (
    <div
      className={`h-16 flex justify-between items-center px-5 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex-1">
        <input
          className={`w-full outline-none rounded-full px-4 ${
            darkMode ? "bg-transparent text-white" : "bg-white"
          }`}
          id="search"
          type="text"
          placeholder={`Search in ${page}`}
        />
      </div>
      <div
        className={`flex-1 flex justify-end ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
