import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3065" }),
  tagTypes: ["Comment"],
  endpoints: (build) => ({
    getComments: build.query<string[], void>({
      query: () => "/comments",
      providesTags: ["Comment"],
    }),
    addComments: build.mutation({
      query: (reqData: { comment: string }) => ({
        url: "/comments",
        method: "POST",
        body: reqData,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentsMutation } = commentApi;
