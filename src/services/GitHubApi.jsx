import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gitHubApi = createApi({
  reducerPath: "gitHub",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (username) => `/users/${username}`,
    }),
  }),
});

export const { useGetUsersQuery } = gitHubApi;
