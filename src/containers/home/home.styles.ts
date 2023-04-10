import styled, { css, keyframes } from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

export const ListTab = styled.div`
  height: 40px;
  width: auto;
  color: #fff;
  margin-top: 8px;
  display: flex;
  gap: 1px;
`;

interface ActiveTab {
  active?: boolean;
}

export const TabItem = styled.div<ActiveTab>`
  width: 130px;
  background-color: ${({ active }) =>
    active ? colorPalette.blue[100] : colorPalette.blue[200]};
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    .tab-item-hover {
      background: ${({ active }) =>
        active ? "transparent" : colorPalette.blue[100]};
      width: 130px;
    }
  }
`;

export const TabItemLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
interface Hover {
  active?: boolean;
}

export const BorderAnimated = styled.div<Hover>`
  background-color: ${({ active }) => (active ? colorPalette.blue[500] : "")};
  width: 0;
  height: 2px;
  transition: width 0.2s ease;
`;
