import React from "react";
import { useAuthUser } from "react-auth-kit";
import { FiUser } from "react-icons/fi"
import Button from "../../components/Button";
import ModalDialog from "../../components/ModalDialog";
import { colorPalette } from "../../config/colorPalette";
import { useUsers } from "../../store/users/useUsers"
import { ModalContent } from "./modalContent";
import { ButtonDiv, Container, ContentInfo, ImageBox } from "./myUser.styles"


export const MyUser: React.FC = () => {
  const { fetchUser, user } = useUsers();
  const authUser = useAuthUser();

  const [openModal, setOpenModal] = React.useState<{
    open: boolean, 
    values: any,
  }>({ 
    open: false, 
    values: {},
  });

  
  React.useEffect(() => {

    const user = authUser();

    if (user) {
      fetchUser(user.id)
    } else 
      return 

  }, [])


  return (
    <>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ImageBox>
            <FiUser size="60" color="#c0c0c0" />
          </ImageBox>

        </div>
        <ContentInfo>
          <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
            <b>{user.nome}</b>
            <span>CPF: {user.cpf}</span>
            <span>Data de Nascimento: {user.dataNascimento}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <b>Contato</b>
            <span>E-mail: {user.email}</span>
            <span>Telefone: {user.telefone}</span>
          </div>
        </ContentInfo>
        <div></div>
        <ButtonDiv>
          <Button 
            onClick={() => {
              setOpenModal({
                open: true,
                values: user
              })
            }} 
            color={colorPalette.orange[300]} 
            style={{ width: '100%' }}
          >
            Alterar dados cadastrais
          </Button>
        </ButtonDiv>
      </Container>

      {openModal.open && (
        <ModalDialog
          open={openModal.open}
          title={"Alterar dados"}
          onClose={() => setOpenModal({ open: false, values: {} })}
        >
          <ModalContent values={openModal.values} onClose={() => setOpenModal({ open: false, values: {} })} />
        </ModalDialog>
      )}
    </>
    
  )
}