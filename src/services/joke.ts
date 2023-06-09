import { createApi } from "@reduxjs/toolkit/query/react";
import { API } from "./api-types";
import axiosBaseQuery from "./axiosBaseQuery";

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response
  }),
  endpoints: (builder) => ({
    getJoke: builder.query<API.TestResponse, void>({
      query: () => "/jokes/random"
    })
  })
});

export const { useGetJokeQuery, endpoints } = jokesApi;
