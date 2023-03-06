import { useContext } from "react";

import { PeopleContext } from './peopleProvider';

export const usePeople = () => {
  const context = useContext(PeopleContext);

  if (!context) {
    throw new Error(
      "usePeople() deve estar dentro de um <PeopleProvider />"
    );
  }

  return context;
};

