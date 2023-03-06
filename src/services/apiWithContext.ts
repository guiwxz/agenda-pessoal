import axios from "axios";

import { parseCookies } from "nookies";

export const getAPIClient = () => {
  const { _auth } = parseCookies();

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (_auth) {
    api.defaults.headers["Authorization"] = `Bearer ${_auth}`;
  }

  return api;
};
