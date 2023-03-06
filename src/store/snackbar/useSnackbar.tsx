import { useContext } from "react";

import { SnackBarContext } from './snackBarProvider';

export const useSnackbar = () => {
  const context = useContext(SnackBarContext);

  return context;
};

