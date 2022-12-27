export type UserType = {
  username: string;
  email: string;
  password: string;
};

export type UserPayloadType = {
  data: UserType;
  callback: () => void;
};

export type UserActivateType = {
  uid?: string;
  token?: string;
};

export type UserActivatePayload = {
  data: UserActivateType;
  callback: () => void;
};

export type SignInUserPayload = {
  data: SignInUser;
  callback: () => void;
};

export type SignInUser = {
  email: string;
  password: string;
};

export type UserMe = {
  username: string;
  id: number;
  email: string;
};
