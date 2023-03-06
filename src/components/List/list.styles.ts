import styled from "styled-components"
import { colorPalette } from "../../config/colorPalette"

export const ListWrapper = styled.div`
  width: 100%;
  padding: 0 0;
  margin: 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  height: calc(80vh - 150px);
  overflow-y: scroll;

  color: ${colorPalette.grey[900]};
  font-size: 14px;
`


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

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`

export const NoContentList = styled.div`
  border: 1px solid ${colorPalette.blue[100]};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: ${colorPalette.blue[500]}
`