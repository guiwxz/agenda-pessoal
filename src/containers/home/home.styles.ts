import styled, { css, keyframes } from "styled-components";
import { colorPalette } from "../../config/colorPalette";




export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`

export const ListTab = styled.div`
  height: 40px; 
  width: auto;
  color: #fff;
  margin-top: 8px;

  display: flex;
  gap: 1px;
`

interface ActiveTab {
  active?: boolean
}

export const TabItem = styled.div<ActiveTab>`
  width: 130px;
  background-color: ${({ active }) => active ? colorPalette.blue[100] : colorPalette.blue[200]};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`

const fillLeftToRight = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: 100%;
  }
`

const animation = css(
  (['', ' 0.3s linear forwards;'] as any) as TemplateStringsArray,
  fillLeftToRight
)

interface Hover {
  hoverTab?: boolean
  active?: boolean
}

export const BorderAnimated = styled.div<Hover>`
  background-color: ${({ active, hoverTab }) => active ? colorPalette.blue[500] : (hoverTab ? colorPalette.blue[500] : '')};
  width: 130px;
  height: 2px;
  animation: ${({ hoverTab }) => hoverTab ? animation : ''};
`
