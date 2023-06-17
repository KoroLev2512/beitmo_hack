export type User = {
  fullName: string;
  email: string;
  password: string;
  avatarUrl: string;
  updatedAt: string;
  createdAt: string;
  _id: string
}

export type UserStore = {
  user: User | null;
  getUser: () => void
  loading: boolean;
  error: null | string;
  login: (data: { email: string; password: string }) => void;
}

