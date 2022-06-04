import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3065";

export const getPosts = createAsyncThunk("get/posts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const addPosts = createAsyncThunk("add/post", async (reqData: { title: string; content: string }) => {
  await axios.post("/post", reqData);
  return reqData;
});

export const delPosts = createAsyncThunk("del/Post", async (id: number) => {
  await axios.delete(`/post/${id}`);
  return { id: id };
});
