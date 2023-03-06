import React from "react";
import api from "../../services/api";
import { People, PeopleContextSchema } from "./people.types";


export const PeopleContext = React.createContext<PeopleContextSchema>(
  {} as PeopleContextSchema
)

export const PeopleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [people, setPeople] = React.useState<People[]>([]);

  const fetchPeople = async (id: any) => {
    try {
      const response = await api.fetchPeople(id);
      setPeople(response);
      
    } catch(e) {
      console.warn(e);
    }
  }

  return (
    <PeopleContext.Provider value={{
      fetchPeople,
      people
    }}>
      {children}
    </PeopleContext.Provider>
  )
}