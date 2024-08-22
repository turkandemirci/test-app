import { IUser } from "../types/user.type";
import { apiSlice } from "@/store/app-slice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "users",
    }),
    getUserById: builder.query<IUser, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
