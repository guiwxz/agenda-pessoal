import { useContext } from "react";

import { ContactsContext } from './contactsProvider';

export const useContacts = () => {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error(
      "useContacts() deve estar dentro de um <ContactsProvider />"
    );
  }

  return context;
};

