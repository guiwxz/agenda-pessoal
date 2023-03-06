import React from 'react';

import { Form, Field } from 'react-final-form'
import { ValidationErrors } from 'final-form';

import { SubmitButton } from '../../components/InputButton';
import { colorPalette } from '../../config/colorPalette';
import { InputField } from '../../components/InputField/index';

import { Box, Container, Content, Header } from './login.styles';
import { OnSubmitValues } from './login.types';
import api from '../../services/api';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router';
import { validatePassword } from '../../utils/validators';
import { ErrorMessage } from '../home/home.styles';

export const Login: React.FC<React.PropsWithChildren> = () => {

  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ password, username, remember }: OnSubmitValues) => {

    if (username != null && password != null) {
      try {
        const response = await api.postSignIn({ 
          password,
          username
        });

        console.log(response);
        

        signIn({
          token: response.accessToken,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: response,
        })

        navigate('/')
        location.reload();


      } catch (e) {
        console.warn(e)
        alert("erro ao logar")
      }

    } else {
      alert("something went wrong")
    }



  } 

  const handleErrors = (values: Record<string, any>) => {
    const error: Record<string, any> = {}
  
    if (values) {
      if (!values.username) {
        error.username = 'Obrigatório!'
      }
  
      if (!values.password) {
        error.password = 'Obrigatório!'

      } else {
        if (values.password.length < 8) {
          error.password = 'Senha deve conter no mínimo 8 digitos'

        } 
        // else if (validatePassword(values.password)) {
        //   error.password = 'Senha deve conter letras e números'
        // }
      }

    }
  
    return error
  }

  return (
    <Container>
      <Box>
        <Header>
          <h2>Bem-vindo!</h2>
        </Header>
        <Content>
          <h4>Faça seu login!</h4>
          <Form
            onSubmit={onSubmit}
            validate={handleErrors}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <Field
                    name='username'
                    render={({ input, meta }) => (
                      <div>
                        <InputField style={{backgroundColor: colorPalette.blue[200]}} type="text" {...input} placeholder="Digite seu nome de usuário" label="Nome de usuário" />
                        {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                      </div>
                    )}
                  />

                  <Field
                    name='password'
                    render={({ input, meta }) => (
                      <div>
                        <InputField style={{backgroundColor: colorPalette.blue[200]}} type="password" {...input} placeholder="Digite sua senha" label="Senha" />
                        {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                      </div>
                    )}
                  />

                  <Field
                    name='remember'
                    type="checkbox"
                    render={({ input, meta }) => (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" {...input} />
                        <label style={{ color: `${colorPalette.primary[400]}`, fontSize: '12px' }} htmlFor='remember'>Lembrar de mim</label>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                      </div>
                    )}
                  />
                </div>

                <SubmitButton label='Entrar' style={{ width: '100%', marginTop: '40px', backgroundColor: colorPalette.blue[500] }} />
                {/* <button type="submit">Submit</button> */}
              </form>
            )}
          />
        </Content>

      </Box>
    </Container>
  )
}
