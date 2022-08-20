import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import PageHead from "../components/PageHead";
import { PostState } from "../context/Context";
import SinglePost from "../components/SinglePost";
function Trending() {
  const { posts } = PostState();
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const trendingPosts = posts.filter((item) => item.postLikes >= 500);
    setTrending(trendingPosts);
  }, [posts]);
  return (
    <Content>
      <div className="max-w-4xl m-auto">
        <SearchBar page="Trending" />
        <PageHead page="Trending" />
        <div className="w-full space-y-6">
          {trending?.map((item) => {
            return <SinglePost key={item.id} post={item} />;
          })}
        </div>
      </div>
    </Content>
  );
}
export default Trending;
