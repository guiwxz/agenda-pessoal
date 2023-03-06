import React from "react";
import { SnackBar } from "./snackBar.styles";

interface SnackbarContextSchema {
  toggleSnackbar: React.Dispatch<React.SetStateAction<SnackBarState>>
}

export const SnackBarContext = React.createContext<SnackbarContextSchema>({} as SnackbarContextSchema)

type SnackBarState = {
  status: 'success' | 'error';
  message: string;
  open: boolean;
}

type SnackBarVariants = {
  'success': {
    color: string;
    bgColor: string;
    defaultMessage: string;
  };
  'error': {
    color: string;
    bgColor: string;
    defaultMessage: string;
  },
}

export const SnackBarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [snackbar, toggleSnackbar] = React.useState<SnackBarState>({
    status: 'error',
    message: '',
    open: false,
  });

  const snackbarVariants: SnackBarVariants = React.useMemo(() => ({
    'success': {
      color: '#009604',
      bgColor: '#75bf77',
      defaultMessage: 'Operação realizada com sucesso'
    },
    'error': {
      color: '#ad0000',
      bgColor: '#d48e8e',
      defaultMessage: 'Erro ao realizar operação'
    },
  }), [])

  const timerHide = React.useRef<any>();

  const setTimeHide = React.useCallback(() => {
    clearTimeout(timerHide.current);
    timerHide.current = setTimeout(() => {
      toggleSnackbar({
        status: 'error',
        message: '',
        open: false,
      })
    }, 3000)
  }, [])

  React.useEffect(() => {
    if (snackbar.open) {
      setTimeHide()
    }

    return () => {
      clearTimeout(timerHide.current)
    }

  }, [snackbar.open, timerHide, setTimeHide])

  return (
    <SnackBarContext.Provider value={{
      toggleSnackbar
    }}>
      {snackbar.open && (
        <SnackBar 
          color={snackbarVariants[snackbar.status].color} 
          bgColor={snackbarVariants[snackbar.status].bgColor}
        >
          <div style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {snackbar.message ?? snackbarVariants[snackbar.status].defaultMessage}
          </div>
        </SnackBar>
      )}
      {children}  
    </SnackBarContext.Provider>

  )
}