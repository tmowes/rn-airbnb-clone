import styled, { css } from 'styled-components/native'
import { SelectionProps } from './types'

export const MarkerStyle = styled.View<SelectionProps>`
  background: white;
  border-width: 1px;
  border-color: grey;
  border-radius: 20px;
  padding: 0 4px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: black;
    `}
`

export const Title = styled.Text<SelectionProps>`
  color: black;
  font-size: 13px;
  font-weight: bold;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: white;
    `}
`
