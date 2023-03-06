import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  height: 50px;
  background-color: ${colorPalette.blue[500]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 12%;
  flex-direction: row;
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

export const Divider = styled.div`
  height: 30px;
  border: 1px solid ${colorPalette.grey[100]};
`

export const Footer = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${colorPalette.blue[900]};
`