import styled, { keyframes } from "styled-components";
import { colorPalette } from "../../config/colorPalette";

interface SnackBarVariant {
  color: string;
  bgColor: string;
}

const animation = keyframes`
  from {
    margin-bottom: 0px;
    opacity: 0;
  }
  to {
    margin-bottom: 20px;
    opacity: 1;
  }

`

const animationOut = keyframes`
  from {
    margin-bottom: 20px;
    opacity: 1;
  }
  to {
    margin-bottom: 0px;
    opacity: 0;
  }

`

export const SnackBar = styled.div<SnackBarVariant>`
  background-color: ${props => props.bgColor};
  width: 300px;
  height: 30px;
  padding: 10px;

  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 20px;
  text-align: center;

  border-radius: 5px;
  border-bottom: 5px solid ${props => props.color};;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${colorPalette.grey[900]};
  animation: ${animation} 0.3s linear, ${animationOut} 0.3s linear 2.9s;

`

