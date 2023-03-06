import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  width: 400px;
  //height: 550px;
`;


export const Header = styled.div`
  height: 20%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  background-color: ${colorPalette.blue[900]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  background-color: ${colorPalette.blue[900]};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
`