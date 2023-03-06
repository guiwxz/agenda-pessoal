import { useContext } from "react";

import { UsersContext } from './usersProvider';

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error(
      "useUsers() deve estar dentro de um <UsersProvider />"
    );
  }

  return context;
};

