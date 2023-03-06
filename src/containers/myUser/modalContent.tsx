import React from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import Button from "../../components/Button";
import { SubmitButton } from "../../components/InputButton";
import { InputField } from "../../components/InputField";
import { colorPalette } from "../../config/colorPalette";
import { Contacts } from "../../store/contacts/contacts.types";
import { Users } from "../../store/users/users.types";
import { useUsers } from "../../store/users/useUsers";
import { formatBornDate, formatCpf, formatPhone, validateEmail } from "../../utils/validators";

interface ModalContentProps {
  values: any;
  onClose: React.Dispatch<void>;
}

export const ModalContent: React.FC<ModalContentProps> = ({ values, onClose }) => {
  const { updateContact } = useUsers();


  
  const onSubmit = (formValues: Record<string, any>) => {
    let query: Record<string, any> = {}
    
    updateContact(formValues as Users);
    
    onClose();
  }

  const handleErrors = (values: Record<string, any>) => {
    let error: Record<string, any> = {}

    if (values) {
      if (values.email) {
        if (validateEmail(values.email)) {
          error.email = 'Email inválido!'
        }
      } else {
        error.email = 'Obrigatório!'
      }

      if (!values.nome) {
        error.nome = 'Obrigatório'
      }

      if (!values.cpf) {
        error.cpf = 'Obrigatório'
      }

      if (!values.dataNascimento) {
        error.dataNascimento = 'Obrigatório'
      }

      if (!values.username) {
        error.username = 'Obrigatório'
      }

      if (!values.telefone) {
        error.telefone = 'Obrigatório'
      }


    }


    return error
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={values}
        validate={handleErrors}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div>
                {values && values.pessoa && values.pessoa.nome && <span>Contato de <b>{values.pessoa.nome}</b></span>}
              </div>
              
              <Field
                name='nome'
                render={({ input, meta }) => (
                  <div>
                    <InputField {...input} placeholder="Seu nome" label="Nome" />
                    {meta && meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <Field
                format={formatCpf}
                name='cpf'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Informe seu CPF" label="CPF" />
                    {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />
              <Field
                name='email'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu email" label="Email" />
                    {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <Field
                format={formatPhone}
                name='telefone'
                render={({ input, meta }) => (
                  <div>
                    <InputField {...input} placeholder="Telefone de contato" label="Telefone" />
                    {meta && meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <Field
                format={formatBornDate}
                name='dataNascimento'
                render={({ input, meta }) => (
                  <div>
                    <InputField {...input} placeholder="aaaa-mm-dd" label="Data de nascimento" />
                    {meta && meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <Field
                name='username'
                render={({ input, meta }) => (
                  <div>
                    <InputField {...input} placeholder="Seu login" label="Nome de usuário" />
                    {meta && meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                  <Button type="button" onClick={onClose} secondary style={{ color: colorPalette.grey[400] }}>Cancelar</Button>
                  <SubmitButton label='Confirmar' style={{ width: '100%', marginTop: '40px' }} />
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  )
}


export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`