import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let id = 0;

interface PostType {
  title: string;
  content: string;
  id: number;
}

export interface PostStateType {
  Posts: Array<PostType>;
}

const initialState = {
  Posts: [{ title: "", content: "", id: 0 }],
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    submitPost(state, action: PayloadAction<{ title: string; content: string }>) {
      state.Posts.push({ ...action.payload, id: ++id });
    },
    delPost(state, action: PayloadAction<{ id: number }>) {
      state.Posts = state.Posts.filter((post) => post.id !== action.payload.id);
    },
    updatePost(state, action: PayloadAction<{ id: number; title: string; content: string }>) {
      const findIdx = state.Posts.findIndex((post) => post.id === action.payload.id);
      console.log(findIdx);
      state.Posts[findIdx].content = action.payload.content;
      state.Posts[findIdx].title = action.payload.title;
    },
  },
});

export const { submitPost, delPost, updatePost } = postSlice.actions;

export default postSlice.reducer;
