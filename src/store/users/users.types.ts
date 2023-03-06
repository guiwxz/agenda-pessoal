export type Users = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  password: string;
  telefone: string;
  username: string;
  dataNascimento: string;
}

export interface ReturnTypeFetchUser {
  message: string;
  object: {
    tipos: [],
    usuario: Users
  }
}

export interface UsersContextSchema {
  user: Users;
  fetchUser: (id: number) => Promise<void>;
  updateContact: (user: Users) => Promise<void>;
}
