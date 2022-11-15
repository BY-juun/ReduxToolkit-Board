import React, { useCallback, useRef } from "react";
import { useAddCommentsMutation } from "../../service/comment";

const CommentForm = () => {
  const commentRef = useRef<HTMLInputElement>(null);
  const [submitComment] = useAddCommentsMutation();
  const submit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentRef.current) return;
    await submitComment({ comment: commentRef.current.value });
  }, []);
  return (
    <form onSubmit={submit}>
      <input ref={commentRef} />
      <button></button>
    </form>
  );
};

export default CommentForm;
