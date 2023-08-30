import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gitHubApi = createApi({
  reducerPath: "gitHub",
  baseQuery: fetchBaseQuery({
    baseUrl: "GET - https://api.github.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (username) => `/users/${username}`,
    }),
  }),
});

export const { useGetUsersQuery } = gitHubApi;
