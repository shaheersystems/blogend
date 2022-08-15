import React from "react";
import Content from "../components/Content";
import { SavedPostState } from "../context/Context";
function SavedPosts() {
  const { savedPosts, setSavedPosts } = SavedPostState();

  return (
    <Content>
      <div className="max-w-4xl m-auto">Saved</div>
    </Content>
  );
}

export default SavedPosts;
