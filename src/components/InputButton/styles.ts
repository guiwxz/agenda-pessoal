import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const StyledSubmitButton = styled.input`
  border: none;
  padding: 12px 16px;
  background-color: ${colorPalette.primary[900]};
  color: ${colorPalette.primary[100]};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  height: 40px;

  &:hover {
    opacity: 80%;
  }
`;
