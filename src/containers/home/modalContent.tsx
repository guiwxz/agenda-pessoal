import React from "react";
import { Field, Form } from "react-final-form";
import { FiTrash2 } from "react-icons/fi";
import styled from "styled-components";
import Button from "../../components/Button";
import { SubmitButton } from "../../components/InputButton";
import { InputField } from "../../components/InputField";
import ModalDialog from "../../components/ModalDialog";
import { colorPalette } from "../../config/colorPalette";
import { Contacts } from "../../store/contacts/contacts.types";
import { useContacts } from "../../store/contacts/useContacts";
import { formatPhone } from "../../utils/validators";
import { handleErrors } from "./helper";
import { ErrorMessage } from "./home.styles";

interface ModalContentProps {
  values: Contacts;
  onClose: React.Dispatch<void>;
  favorite?: boolean;
}

export const ModalContent: React.FC<ModalContentProps> = ({ values, onClose, favorite }) => {
  const { postContact, deleteContact, postFavorite, deleteFavorite } = useContacts();

  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const isEdit = React.useMemo(() => {
    if (values && values.id) {
      return true;
    }
    return false;
  }, [values])

  const fav = React.useMemo(() => {
    
    if (favorite) {
      return true;
    }
    return false;
  }, [favorite])

  
  const onSubmit = (formValues: Record<string, any>, form: any) => {
    let query: Record<string, any> = {}
    
    if (!isEdit) { //! alternativa por não estar listando pessoas na hora de cadastrar
      query = {
        ...formValues,
        pessoa: {
          id: 1
        },
        usuario: {
          id: 1,
        }
      }

    } else {
      query = formValues
    }
    
    if (favorite) {
      postFavorite(query as Contacts);
    } else {
      postContact(query as Contacts)
    }
    
    onClose();
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
                name='email'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Email de contato" label="Email" />
                    {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />
              <Field
                name='tag'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Principal, comercial, casa, whatsapp..." label="Descrição do contato" />
                    {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <Field
                name='tipoContato'
                render={({ input, meta }) => (
                  <div>
                    <StyledLabel htmlFor="tipoContato">Tipo de contato</StyledLabel>
                    <SelectField type="text" {...input} placeholder="" name="tipoContato">
                      <option defaultValue="CELULAR" value="CELULAR">Celular</option>
                      <option value="EMAIL">Email</option>
                      <option value="TELEFONE">Telefone</option>
                    </SelectField>
                    {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </div>
                )}
              />

              <Field
                name='privado'
                type="checkbox"
                render={({ input, meta }) => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" {...input} />
                    <label style={{ color: `${colorPalette.primary[400]}`, fontSize: '14px' }} htmlFor='privado'>Contato privado</label>
                  </div>
                )}
              />  

              {/* <h3>Pessoa do contato</h3>

              <Field
                name='nome'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu nome" label="Nome" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='cpf'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu cpf" label="CPF" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='cidade'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite sua cidade" label="Cidade" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='estado'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu estado" label="Estado" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='bairro'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu bairro" label="Bairro" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='logradouro'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu endereço" label="Endereço" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='numero'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite o número do endereço" label="Número do endereço" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <Field
                name='pais'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite o país" label="País" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />


              <Field
                name='cep'
                render={({ input, meta }) => (
                  <div>
                    <InputField type="text" {...input} placeholder="Digite seu cep" label="CEP" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              /> */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              
                {isEdit ? (
                  <Button style={{ width: '30px' }} color="red" onClick={() => setOpenDeleteModal(true)}>
                    <FiTrash2 />
                  </Button>
                ) : (
                  <div></div>
                )}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                  <Button type="button" onClick={onClose} secondary style={{ color: colorPalette.grey[400] }}>Cancelar</Button>
                  <SubmitButton label='Confirmar' style={{ width: '100%', marginTop: '40px' }} />
                </div>
              </div>
            </div>
          </form>
        )}
      />
      {openDeleteModal && (
        <ModalDialog
          open={openDeleteModal}
          title="Remover contato"
          onClose={() => setOpenDeleteModal(false)}
          small
        >
          <div style={{ display: "flex", flexDirection: 'column', gap: '30px' }}>
            <span>Deseja remover esse contato?</span>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px' }}>
              <Button 
                type="button" 
                onClick={() => setOpenDeleteModal(false)} 
                secondary 
                style={{ color: colorPalette.grey[400] }}
              >
                Cancelar
              </Button>
              <Button 
                type="button" 
                onClick={() => {
                  if (fav) {
                    deleteFavorite(values.id)
                  } else {
                    deleteContact(values.id)
                  }
                  setOpenDeleteModal(false)
                  onClose();
                }}
                color={'red'}
              >
              Confirmar
            </Button>
            </div>
          </div>
        </ModalDialog>
      )}
    </div>
  )
}


const SelectField = styled.select`
  padding: 12px;
  border: 1px solid ${colorPalette.primary[600]};
  background-color: ${colorPalette.primary[700]};
  border-radius: 3px;
  outline: none;
  color: ${colorPalette.primary[200]};
  width: 100%;
`

export const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
  color: ${colorPalette.primary[400]};
`;