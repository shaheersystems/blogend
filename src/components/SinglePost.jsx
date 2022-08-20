import React from "react";
import Tag from "../components/Tag";
import BookMarkIcon from "../icons/BookmarkIcon";
import UserCard from "./UserCard";
import { PostState } from "../context/Context";
import FilledBookmarkIcon from "../icons/FilledBookMark";
import ShareIcon from "../icons/ShareIcon";
import LikeIcon from "../icons/LikeIcon";
import { Tooltip } from "flowbite-react";
function SinglePost({ post }) {
  const { savedPosts, setSavedPosts, darkMode } = PostState();
  function copy(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div
      className={`cursor-pointer w-full px-5 border-b ${
        darkMode
          ? "border-gray-700 bg-gray-900 text-gray-100"
          : "bg-white text-black"
      }`}
    >
      <UserCard author={post.author} month={post.date} />
      <div className="py-2 h-46">
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="">{post.content}....</p>
        </div>
        <div className="h-16 flex py-2 justify-between items-center">
          <div>
            <Tag text={post.category} />
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-2 items-center">
              <LikeIcon />
              <span>{post.postLikes}</span>
            </div>

            <button onClick={() => copy(post.postUrl)}>
              <Tooltip
                content="Link Copied"
                trigger="click"
                style={darkMode ? "light" : "dark"}
              >
                <ShareIcon />
              </Tooltip>
            </button>
            {savedPosts.includes(post) ? (
              <button
                onClick={() =>
                  setSavedPosts(savedPosts.filter((c) => c.id !== post.id))
                }
              >
                <FilledBookmarkIcon />
              </button>
            ) : (
              <button onClick={() => setSavedPosts([...savedPosts, post])}>
                <BookMarkIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
