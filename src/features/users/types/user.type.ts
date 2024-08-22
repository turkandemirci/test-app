export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserState {
  selectedUserId: number | null;
}
