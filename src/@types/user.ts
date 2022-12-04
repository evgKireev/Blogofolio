export type UserType = {
  username: string;
  email: string;
  password: string;
};

export type UserActivateType = {
  uid?: string;
  token?: string;
};
