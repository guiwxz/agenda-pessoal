export type User = {
  codigo: number;
  username: string;
  nickname: string;
  date: string;
};

export type SignInPayload = {
  username: string;
  password: string;
};

export type SignInRequestData = {
  accessToken: string,
  id: 0,
  tipos: [
    string
  ],
  tokenType: string,
  username: string
};
