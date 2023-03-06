import React from "react";
import api from "../../services/api";
import { useSnackbar } from "../snackbar/useSnackbar";
import { ReturnTypeFetchUser, Users, UsersContextSchema } from "./users.types";


export const UsersContext = React.createContext<UsersContextSchema>(
  {} as UsersContextSchema
)

export const UsersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { toggleSnackbar } = useSnackbar()

  const [user, setUser] = React.useState<Users>({} as Users);

  const fetchUser = async (id: number) => {
    try {
      const { object }: ReturnTypeFetchUser = await api.fetchUser(id);
      setUser(object.usuario);
      
    } catch(e) {
      console.warn(e);
    }
  }

  const updateContact = async (user: Users) => {
    try {
      const response = await api.updateUser(user);
      
      toggleSnackbar({
        message: response.message,
        open: true,
        status: 'success'
      })

      fetchUser(user.id);
    } catch (err: any) {
      
      toggleSnackbar({
        message: err.message,
        open: true,
        status: 'error'
      })
      console.warn(err);
    }
  };



  return (
    <UsersContext.Provider value={{
      updateContact,
      fetchUser,
      user
    }}>
      {children}
    </UsersContext.Provider>
  )
}