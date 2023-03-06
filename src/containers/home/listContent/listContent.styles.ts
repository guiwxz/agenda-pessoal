import styled from "styled-components"
import { colorPalette } from "../../../config/colorPalette"

export const ListItemWrapper = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  justify-content: space-between; 
  align-items: center;
  align-content: center;
  padding: 20px;
  background-color: ${colorPalette.blue[100]};
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ListTitle = styled.span`
  font-weight: bold;
  font-size: 16px;

`