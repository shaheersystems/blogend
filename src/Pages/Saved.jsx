import React from "react";
import Content from "../components/Content";
import { PostState } from "../context/Context";
import SinglePost from "../components/SinglePost";
import SearchBar from "../components/SearchBar";
import PageHead from "../components/PageHead";
import Empty from "../components/Empty";
function SavedPosts() {
  const { savedPosts } = PostState();
  return (
    <Content>
      <div className="max-w-4xl m-auto">
        <SearchBar page="Saved" />
        <PageHead page="Saved" />
        {savedPosts.length !== 0 ? (
          <div>
            {savedPosts?.map((item) => {
              return <SinglePost key={item.id} post={item} />;
            })}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </Content>
  );
}

export default SavedPosts;
