import { User } from "../../services/api.types";
import { People } from "../people/people.types";

export interface Contacts {
  id: number;
  email?: string;
  privado: boolean;
  /**
   * Descrição do contato
   */
  tag: string;
  telefone: string;
  tipoContato: 'CELULAR' | 'EMAIL' | 'TELEFONE';
  pessoa: People;
  usuario: User;

  favorite?: boolean;
}

export interface ContactsContextSchema {
  contacts: Contacts[];
  fetchContacts: (params?: any) => Promise<void>;
  postContact: (contact: Contacts) => Promise<void>;
  deleteContact: (id: number) => Promise<void>;

  favorites: Contacts[];
  fetchFavorites: () => Promise<void>;
  postFavorite: (contact: Contacts) => Promise<void>;
  deleteFavorite: (id: number) => Promise<void>;
}
