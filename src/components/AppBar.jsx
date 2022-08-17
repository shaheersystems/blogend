import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import BookmarkIcon from "../icons/BookmarkIcon";
import TrendingIcon from "../icons/TrendingIcon";
import WriteIcon from "../icons/WriteIcon";
function AppBar() {
  return (
    <div className="flex fixed left-0 flex-col items-center justify-between pt-5 pb-5 w-20 h-screen border-r border-gray-300">
      <div>
        <Link to="/">
          <h1 className="text-3xl font-black">B.</h1>
        </Link>
      </div>
      <div className="flex flex-col space-y-8">
        <Link to="/" className="p-1" title="Home">
          <HomeIcon />
        </Link>
        <Link to="/SavedPosts" className="p-1">
          <BookmarkIcon />
        </Link>
        <Link to="/trending" className="p-1">
          <TrendingIcon />
        </Link>
        <hr className="border-t border-b-none border-gray-300" />
        <a href="/" className="p-1">
          <WriteIcon />
        </a>
      </div>
      <div>
        <div className="w-10 h-10 flex items-center justify-center bg-green-900 text-white font-bold rounded-full">
          M
        </div>
      </div>
    </div>
  );
}

export default AppBar;
