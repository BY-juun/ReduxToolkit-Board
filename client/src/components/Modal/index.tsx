import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { submitPost } from "../../slice/post";
import { CommentFormTitle, ContentWrapper, ModalContent, ModalRoot, OverLay, SubmitBtn } from "./styles";

interface Props {
  onClose: () => void;
}

const Modal = ({ onClose }: Props) => {
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const submit = useCallback(() => {
    if (!titleRef.current || !contentRef.current) return;
    dispatch(submitPost({ title: titleRef.current.value, content: contentRef.current.value }));
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
          <SubmitBtn onClick={submit}>등록</SubmitBtn>
        </ContentWrapper>
      </ModalContent>
    </ModalRoot>
  );
};

export default Modal;
