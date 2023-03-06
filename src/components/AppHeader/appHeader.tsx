import { useSignOut } from "react-auth-kit"
import { useNavigate } from "react-router"
import { colorPalette } from "../../config/colorPalette"
import Button from "../Button"
import { Buttons, Container, Content, Divider, Footer } from "./appHeader.styles"

export const AppHeader: React.FC<React.PropsWithChildren> = () => {

  const navigate = useNavigate();
  const signOut = useSignOut();

  return (
    <div>
      <Container>
        <Content>
          <h2 style={{ fontWeight: 'normal' }}>Minha agenda</h2>
          <Divider />
          <Buttons>
            <Button style={{ width: '60px' }} onClick={() => navigate('/')} color={colorPalette.blue[900]}>
              Home
            </Button>
          </Buttons>
        </Content>
        <Content style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button style={{ width: '60px' }} color={colorPalette.grey[900]} onClick={() => signOut()}>
            Logout
          </Button>
        </Content>
      </Container>
      <Footer />
    </div>
  )
}