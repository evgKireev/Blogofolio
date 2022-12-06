export type UserType = {
  username: string;
  email: string;
  password: string;
};

export type UserActivateType = {
  uid?: string;
  token?: string;
};

export type SignInUser = {
  email: string;
  password: string;
};

export type UserMe = {
  username: string;
  password: string;
  id: number;
};
