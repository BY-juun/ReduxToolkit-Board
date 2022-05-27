import React from "react";
import { CommentFormTitle, ModalContent, ModalRoot, OverLay, SubmitBtn } from "./styles";

interface Props {
  onClose: () => void;
}

const Modal = ({ onClose }: Props) => {
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
        <div>
          <textarea />
          <SubmitBtn>등록</SubmitBtn>
        </div>
      </ModalContent>
    </ModalRoot>
  );
};

export default Modal;
