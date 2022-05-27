import React from "react";
import { PostCardWrapper } from "./styles";

interface Props {
  title: string;
  content: string;
}

const PostCard = ({ title, content }: Props) => {
  if (title === "" || content === "") return <></>;
  return (
    <PostCardWrapper>
      <div>
        <h3>제목</h3>
        <span>{title}</span>
      </div>
      <div>
        <h3>내용</h3>
        <span>{content}</span>
      </div>
    </PostCardWrapper>
  );
};

export default PostCard;
