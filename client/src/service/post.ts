import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

interface PostType {
  title: string;
  content: string;
  id: number;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3065" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getPosts: build.query<PostType[], void>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    addPosts: build.mutation({
      query: (reqData: { title: string; content: string }) => ({
        url: "/post",
        method: "POST",
        body: reqData,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostsMutation } = postApi;
