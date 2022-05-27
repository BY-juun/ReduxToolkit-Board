import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostType {
  title: string;
  content: string;
}

export interface PostStateType {
  Posts: Array<PostType>;
}

const initialState = {
  Posts: [{ title: "", content: "" }],
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    submitPost(state, action: PayloadAction<{ title: string; content: string }>) {
      state.Posts.push(action.payload);
    },
  },
});

export const { submitPost } = postSlice.actions;

export default postSlice.reducer;
