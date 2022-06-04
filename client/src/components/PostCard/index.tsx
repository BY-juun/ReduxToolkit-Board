import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../rootReducer";
import { delPosts } from "../../service/post";
import { delPost } from "../../slice/post";
import { handleModal, UtilStateType } from "../../slice/util";
import { AppDispatch } from "../../store";
import Modal from "../Modal";
import { PostCardWrapper } from "./styles";

interface Props {
  Post: {
    title: string;
    content: string;
    id: number;
  };
}

const PostCard = ({ Post }: Props) => {
  const { id, title, content } = Post;
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onClickDel = useCallback(() => {
    return dispatch(delPosts(id));
  }, [dispatch, Post]);

  const onClickEdit = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  if (title === "" || content === "") return <></>;
  return (
    <>
      <PostCardWrapper>
        <div>
          <div>
            <span>제목</span>
            <button onClick={onClickDel}>삭제</button>
            <button onClick={onClickEdit}>수정</button>
          </div>
          <span>{title}</span>
        </div>
        <div>
          <div>
            <span>내용</span>
          </div>
          <span>{content}</span>
        </div>
      </PostCardWrapper>
      {openModal && <Modal onClose={onCloseModal} id={id} />}
    </>
  );
};

export default PostCard;
