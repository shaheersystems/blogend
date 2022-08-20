import React from "react";
import Content from "../components/Content";
import { PostState } from "../context/Context";
import SearchBar from "../components/SearchBar";
import SinglePost from "../components/SinglePost";
import PageHead from "../components/PageHead";
function Home() {
  const { posts } = PostState();
  return (
    <Content>
      <div className="max-w-4xl m-auto">
        <SearchBar page="Feed" />
        <PageHead page="Feed" />
        <div className="w-full space-y-6">
          {posts?.map((item) => {
            return <SinglePost key={item.id} post={item} />;
          })}
        </div>
      </div>
    </Content>
  );
}

export default Home;
