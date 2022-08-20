import React from "react";
import { PostState } from "../context/Context";
const Content = ({ children }) => {
  const { darkMode } = PostState();
  return (
    <div className={`flex-1 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {children}
    </div>
  );
};
export default Content;
