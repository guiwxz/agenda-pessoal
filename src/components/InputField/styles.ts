import React from "react";
import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const StyledInput = styled.input<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>`
  padding: 12px;
  border: 1px solid ${colorPalette.primary[600]};
  background-color: ${colorPalette.primary[700]};
  border-radius: 3px;
  outline: none;
  color: ${colorPalette.primary[200]};
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
  color: ${colorPalette.primary[400]};
`;

export const StyledWrapper = styled.div<{ textArea?: boolean }>`
  display: flex;
  flex-direction: column;
  //padding: 8px 0 8px 0;
`;

export const StyledTextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${colorPalette.primary[600]};
  background-color: ${colorPalette.primary[700]};
  border-radius: 3px;
  outline: none;
  color: ${colorPalette.primary[200]};
`;
