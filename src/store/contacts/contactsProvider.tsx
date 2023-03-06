import React from 'react';
import api from '../../services/api';
import { useSnackbar } from '../snackbar/useSnackbar';
import { Contacts, ContactsContextSchema } from './contacts.types';

export const ContactsContext = React.createContext<ContactsContextSchema>(
  {} as ContactsContextSchema
);

 
export const ContactsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [contacts, setContacts] = React.useState<Contacts[]>([] as Contacts[]);
  const [favorites, setFavorites] = React.useState<Contacts[]>([] as Contacts[]);

  const { toggleSnackbar } = useSnackbar();

  const fetchContacts = React.useCallback(async (params?: any) => {
    try {
      const response = await api.fetchContacts(params);
      if (response) setContacts(response);
    } catch (err) {
      console.warn(err);
    }
  }, [])

  const postContact = async (contact: Contacts) => {
    try {
      const response = await api.postContact(contact);
      console.log(response);
      
      toggleSnackbar({
        message: response.message,
        open: true,
        status: 'success'
      })

      fetchContacts();
    } catch (err: any) {
      console.log(err);
      
      toggleSnackbar({
        message: err.message,
        open: true,
        status: 'error'
      })
      console.warn(err);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      const response = await api.deleteContact(id);
      console.log(response);

      toggleSnackbar({
        message: response.message,
        open: true,
        status: 'success'
      })

      fetchContacts();
    } catch (err: any) {

      toggleSnackbar({
        message: err.message,
        open: true,
        status: 'success'
      })
      console.warn(err);
    }
  }

  const fetchFavorites = React.useCallback(async (params?: any) => {
    try {
      const response = await api.fetchFavorites();
      
      if (response) { 
        const fav = response.map((it: Contacts) => ({
          ...it,
          favorite: true,
        }))
        setFavorites(fav);
      }

    } catch (err) {
      console.warn(err);
    }
  }, [])

  const postFavorite = async (contact: Contacts) => {
    try {
      const response = await api.postFavorite(contact);
      console.log(response);
      
      toggleSnackbar({
        message: response.message,
        open: true,
        status: 'success'
      })

      fetchContacts();
    } catch (err: any) {
      console.log(err);
      
      toggleSnackbar({
        message: err.message,
        open: true,
        status: 'error'
      })
      console.warn(err);
    }
  };

  const deleteFavorite = async (id: number) => {
    try {
      const response = await api.deleteFavorite(id);
      console.log(response);

      toggleSnackbar({
        message: response.message,
        open: true,
        status: 'success'
      })

      fetchContacts();
    } catch (err: any) {

      toggleSnackbar({
        message: err.message,
        open: true,
        status: 'success'
      })
      console.warn(err);
    }
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        fetchContacts,
        postContact,
        deleteContact,
        favorites,
        fetchFavorites,
        deleteFavorite,
        postFavorite
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}