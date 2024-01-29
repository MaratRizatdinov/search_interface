import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://api.github.com";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => `search/users?${params}`,
    }),
    getUser: build.query({
      query: (login) => `users/${login}`,
    }),
    getRepos: build.query({
      query: ({login, params}) => `users/${login}/repos?${params}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useGetReposQuery } = usersApi;
