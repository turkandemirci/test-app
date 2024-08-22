import { useDispatch, useSelector } from "react-redux";
import { useGetUserByIdQuery, useGetUsersQuery } from "../api/user-api";

// src/features/user/hooks/useUser.ts
import { RootState } from "@/store/store";
import { setSelectedUserId } from "../store/user-slice";

export const useUser = () => {
  const dispatch = useDispatch();
  const selectedUserId = useSelector(
    (state: RootState) => state.user.selectedUserId
  );

  return {
    selectedUserId,
    setSelectedUserId: (id: number) => dispatch(setSelectedUserId(id)),
    useGetUsersQuery,
    useGetUserByIdQuery,
  };
};
