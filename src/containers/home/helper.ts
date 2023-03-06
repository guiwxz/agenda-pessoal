import { validateEmail } from "../../utils/validators"

export const handleErrors = (values: Record<string, any>) => {
  const error: Record<string, any> = {}

  if (values) {
    if (!values.telefone) {
      error.telefone = 'Obrigatório!'
    }
    if (values.email) {
      if (validateEmail(values.email)) {
        error.email = 'Email inválido!'
      }
    } else {
      error.email = 'Obrigatório!'
    }

    if (!values.tag) {
      error.tag = 'Obrigatório!'
    }

    if (!values.tipoContato) {
      error.tipoContato = 'Obrigatório!'
    }
  }

  return error
}