import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchInput = styled.input`
  padding: 12px;
  border: 1px solid ${colorPalette.grey[200]};
  background-color: ${colorPalette.blue[200]};
  border-radius: 3px;
  outline: none;
  color: ${colorPalette.primary[200]};
  width: 230px;
  height: 10px;
  color: #fff;

  &::placeholder{
    color: ${colorPalette.grey[100]};
  }
`