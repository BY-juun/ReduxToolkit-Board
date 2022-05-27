import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import WriteOpenBtn from "./components/WriteOpenBtn";
import { ReducerType } from "./rootReducer";
import { PostStateType } from "./slice/post";
import { Wrapper } from "./styles";

function App() {
  const { Posts } = useSelector<ReducerType, PostStateType>((state) => state.postSlice);
  useEffect(() => {
    console.log(Posts);
  }, [Posts]);
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
