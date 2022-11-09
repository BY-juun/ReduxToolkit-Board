import React from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import WriteOpenBtn from "./components/WriteOpenBtn";
import { useGetPostsQuery } from "./service/post";
import { Wrapper } from "./styles";

function App() {
  const { data: Posts, isLoading } = useGetPostsQuery();
  if (isLoading) return <></>;
  return (
    <>
      <Header />
      <Wrapper>
        <WriteOpenBtn />
        {Posts?.map((Post, idx) => {
          return <PostCard key={idx} Post={Post} />;
        })}
      </Wrapper>
    </>
  );
}

export default App;
