import { AxiosError, AxiosResponse } from "axios";
import { Contacts } from "../store/contacts/contacts.types";
import { Users } from "../store/users/users.types";
import { SignInPayload, SignInRequestData } from "./api.types";
import { getAPIClient } from "./apiWithContext";

export const baseApi = getAPIClient();

const parseResponse = (response: AxiosResponse) => {

  const res = response;
  if (response.status === 200) {
    return res.data;
  }
  throw res;
};

const parseError = (response: AxiosError) => {

  if (response.response && response.response.data) {
    throw response.response.data
  }

  throw response;
};

const api = {
  postSignIn: async ({
    password,
    username,
  }: SignInPayload): Promise<SignInRequestData> => {
    return await baseApi.post(`/api/auth/login`,
      {
        password,
        username
      },
      {
        method: "POST",
      },
    )
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },

  getPhoto: async (id: number) => {
    return await baseApi.get(`/api/foto/download/${id}`, {
      method: 'GET'
    })
      .then(parseResponse)
      .catch((err) => console.warn(err))
  },

  fetchContacts: async (params: any) => {
    return await baseApi
      .get(`/api/contato/listar/1`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  postContact: async (contact: Contacts) => {
    return await baseApi.post("/api/contato/salvar", contact, {
      method: "POST",
    })
      .then(parseResponse)
      .catch(parseError);
  },
  deleteContact: async (id: number) => {
    return await baseApi.delete(`/api/contato/remover/${id}`, {
      method: "DELETE",
    })
      .then(parseResponse)
      .catch(parseError);
  },
  searchContacts: async (payload: { termo: string }) => {
    return await baseApi
      .post(`/api/contato/pesquisar`, payload, {
        method: "POST",
      })
      .then(parseResponse)
      .catch(parseError);
  },
  fetchPeople: async (id?: any) => {
    return await baseApi.get(`/api/pessoa/buscar/${id}`, {
      method: "GET",
    })
      .then(parseResponse)
      .catch(parseError);
  },

  fetchFavorites: async () => {
    return await baseApi.get(`/api/favorito/pesquisar`, {
      method: "GET",
    })
      .then(parseResponse)
      .catch(parseError);
  },
  postFavorite: async (contact: Contacts) => {
    return await baseApi.post("/api/favorito/salvar/", contact, {
      method: "POST",
    })
      .then(parseResponse)
      .catch(parseError);
  },
  deleteFavorite: async (id: number) => {
    return await baseApi.delete(`/api/favorito/remover/${id}`, {
      method: "DELETE",
    })
      .then(parseResponse)
      .catch(parseError);
  },

  fetchLoggedUser: async (id: number) => {
    return await baseApi.get(`/api/usuario/buscar/${id}`, {
      method: "GET",
    })
      .then(parseResponse)
      .catch(parseError);
  },
  fetchUser: async (id: number) => {
    return await baseApi
      .get(`/api/usuario/buscar/${id}`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  postUser: async (user: Users) => {
    return await baseApi.post("/api/usuario/salvar", user, {
      method: "POST",
    })
      .then(parseResponse)
      .catch(parseError);
  },
  updateUser: async (user: Users) => {
    return await baseApi.put("/api/usuario/atualizar", user, {
      method: "PUT",
    })
      .then(parseResponse)
      .catch(parseError);
  }

};

export default api;
