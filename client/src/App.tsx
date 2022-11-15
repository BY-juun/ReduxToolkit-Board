import React from "react";
import CommentForm from "./components/CommentForm";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import WriteOpenBtn from "./components/WriteOpenBtn";
import { useGetCommentsQuery } from "./service/comment";
import { useGetPostsQuery } from "./service/post";
import { Wrapper } from "./styles";

function App() {
  const { data: Posts, isLoading } = useGetPostsQuery();
  const { data: Comments, isLoading: isCommentLoading } = useGetCommentsQuery();
  if (isLoading) return <></>;
  if (isCommentLoading) return <></>;
  return (
    <>
      <Header />
      <Wrapper>
        <CommentForm />
        {Comments?.map((comment) => {
          return <span key={comment}>{comment}</span>;
        })}
        <WriteOpenBtn />
        {Posts?.map((Post, idx) => {
          return <PostCard key={idx} Post={Post} />;
        })}
      </Wrapper>
    </>
  );
}

export default App;
