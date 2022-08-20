import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import BookmarkIcon from "../icons/BookmarkIcon";
import TrendingIcon from "../icons/TrendingIcon";
import WriteIcon from "../icons/WriteIcon";
import { Tooltip } from "flowbite-react/lib/esm/components";
import { PostState } from "../context/Context";
function AppBar() {
  const { darkMode } = PostState();
  return (
    <div
      className={`flex ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white border-gray-300"
      } sticky top-0 left-0 flex-col items-center justify-between pt-5 pb-5 w-20 h-screen border-r`}
    >
      <div>
        <Link to="/">
          <h1 className="text-3xl font-black">B.</h1>
        </Link>
      </div>
      <div className="flex flex-col space-y-8">
        <Link to="/" className="p-1">
          <Tooltip
            content="Feed"
            placement="right"
            style={darkMode ? "light" : "dark"}
          >
            <HomeIcon />
          </Tooltip>
        </Link>
        <Link to="/SavedPosts" className="p-1">
          <Tooltip
            content="Saved"
            placement="right"
            style={darkMode ? "light" : "dark"}
          >
            <BookmarkIcon />
          </Tooltip>
        </Link>
        <Link to="/trending" className="p-1">
          <Tooltip
            content="Trending"
            placement="right"
            style={darkMode ? "light" : "dark"}
          >
            <TrendingIcon />
          </Tooltip>
        </Link>
        <hr className="border-t border-b-none border-gray-300" />
        <a href="/" className="p-1">
          <Tooltip
            content="Write"
            placement="right"
            style={darkMode ? "light" : "dark"}
          >
            <WriteIcon />
          </Tooltip>
        </a>
      </div>
      <div>
        <div className="w-10 h-10 flex items-center justify-center bg-green-900 text-white font-bold rounded-full cursor-pointer">
          <span>M</span>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
