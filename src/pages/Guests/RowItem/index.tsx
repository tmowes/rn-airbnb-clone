import React from 'react'

import { RowItemProps } from './types'
import * as S from './styles'

const RowItem = ({ guest, values, index, setValues }: RowItemProps) => {
  const { type, details } = guest

  return (
    <S.Container>
      <S.Left>
        <S.Title>{type}</S.Title>
        <S.Details>{details}</S.Details>
      </S.Left>
      <S.Right>
        <S.Row>
          <S.ValueButton onPress={() => setValues[index](values[index] - 1)}>
            <S.Minus />
          </S.ValueButton>
          <S.Value>{values[index]}</S.Value>
          <S.ValueButton onPress={() => setValues[index](values[index] + 1)}>
            <S.Plus />
          </S.ValueButton>
        </S.Row>
      </S.Right>
    </S.Container>
  )
}

export default RowItem
