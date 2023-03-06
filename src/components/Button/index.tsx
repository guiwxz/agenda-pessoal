import React from "react";
import { StyledButton } from "./index.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (payload: any) => void;
  secondary?: boolean;
  color?: string;
  testid?: string;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, secondary, testid, children, style }) => {
  return (
    <StyledButton style={style} onClick={onClick} secondary={secondary ?? false} color={color} id={testid}>
      {children}
    </StyledButton>
  );
};

export default Button;
