import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import WriteOpenBtn from "./components/WriteOpenBtn";
import { ReducerType } from "./rootReducer";
import { getPosts } from "./service/post";
import { PostStateType } from "./slice/post";
import { AppDispatch } from "./store";
import { Wrapper } from "./styles";

function App() {
  const { Posts } = useSelector<ReducerType, PostStateType>((state) => state.postSlice);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
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
