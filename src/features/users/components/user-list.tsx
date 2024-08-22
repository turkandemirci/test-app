"use client";

import React from "react";
import { useUser } from "../hooks/use-user";

export const UserList: React.FC = () => {
  const { useGetUsersQuery, selectedUserId, setSelectedUserId } = useUser();
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isLoading) return <div>Kullanıcılar yükleniyor...</div>;
  if (isError) return <div>Kullanıcıları yüklerken bir hata oluştu.</div>;

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>
      <ul>
        {users?.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUserId(user.id)}
            style={{
              fontWeight: user.id === selectedUserId ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      {selectedUserId && <SelectedUserDetails userId={selectedUserId} />}
    </div>
  );
};

const SelectedUserDetails: React.FC<{ userId: number }> = ({ userId }) => {
  const { useGetUserByIdQuery } = useUser();
  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);

  console.log(user);

  if (isLoading) return <div>Kullanıcı detayları yükleniyor...</div>;
  if (isError)
    return <div>Kullanıcı detaylarını yüklerken bir hata oluştu.</div>;
  if (!user) return null;

  return (
    <div>
      <h2>Seçili Kullanıcı Detayları</h2>
      <p>İsim: {user.name}</p>
      <p>Kullanıcı Adı: {user.username}</p>
      <p>E-posta: {user.email}</p>
    </div>
  );
};
