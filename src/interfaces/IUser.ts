export interface IUser {
  _id: string;
  email: string;
  userName: string;
  password: string;
  avatarUrl: string;
  isActivated: boolean;
  activationLink: string;
  role: string;
  favorites: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
