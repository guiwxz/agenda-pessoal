import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  background-color: ${colorPalette.blue[100]};
  padding: 20px 40px;

  color: ${colorPalette.grey[900]};

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
`

export const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${colorPalette.grey[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 40px;
`

export const ContentInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;

  @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
`

export const ButtonDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`

