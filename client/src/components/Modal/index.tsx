import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addPosts, useAddPostsMutation, useGetPostsQuery, usePatchPostMutation } from "../../service/post";
import { submitPost, updatePost } from "../../slice/post";
import { AppDispatch } from "../../store";
import { CommentFormTitle, ContentWrapper, ModalContent, ModalRoot, OverLay, SubmitBtn } from "./styles";

interface Props {
  onClose: () => void;
  id?: number;
}

const Modal = ({ onClose, id }: Props) => {
  const [submitPost] = useAddPostsMutation();
  const [patchPost] = usePatchPostMutation();
  const { refetch } = useGetPostsQuery();
  const dispatch = useDispatch<AppDispatch>();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const submit = useCallback(async () => {
    if (!titleRef.current || !contentRef.current) return;
    await submitPost({ title: titleRef.current.value, content: contentRef.current.value });
    //refetch();
    return onClose();
  }, []);

  const edit = useCallback(async () => {
    if (!titleRef.current || !contentRef.current) return;
    await patchPost({ id: Number(id), title: titleRef.current.value, content: contentRef.current.value });
    //dispatch(updatePost({ id: Number(id), title: titleRef.current.value, content: contentRef.current.value }));
    return onClose();
  }, []);

  return (
    <ModalRoot>
      <OverLay onClick={onClose}></OverLay>
      <ModalContent>
        <CommentFormTitle>
          <span>글쓰기</span>
          <button onClick={onClose}>
            <img src="/close_btn.png" width={30} height={30} />
          </button>
        </CommentFormTitle>
        <ContentWrapper>
          <div>
            <span> 제목</span>
            <input ref={titleRef} />
          </div>
          <div>
            <span>내용</span>
            <textarea ref={contentRef} />
          </div>
          <SubmitBtn onClick={id ? edit : submit}>{id ? "수정" : "등록"}</SubmitBtn>
        </ContentWrapper>
      </ModalContent>
    </ModalRoot>
  );
};

export default Modal;
