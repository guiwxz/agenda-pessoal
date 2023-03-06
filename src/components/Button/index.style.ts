import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

interface StyledButtonProps {
  secondary: boolean;
  color?: string;
  style?: any
}

export const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;

  gap: 15px;
  padding: 8px 10px;
  border: none;
  background-color: ${({ secondary, color }) => {
    if (color) {
      return color;
    }
    return secondary
      ? `${colorPalette.primary[200]}`
      : `${colorPalette.primary[900]}`;
  }};
  color: #fff;
  /* color: ${(props) =>
    props.secondary
      ? `${colorPalette.primary[900]}`
      : `${colorPalette.primary[200]}`}; */
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 70%;
  }
`;
