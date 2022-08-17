import React from "react";
import Tag from "../components/Tag";
import BookMarkIcon from "../icons/BookmarkIcon";
import UserCard from "./UserCard";
function SinglePost({ post }) {
  return (
    <div className="cursor-pointer w-full px-5 border-b border-gray-300">
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
          <div>
            <BookMarkIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
