import { useNavigation } from '@react-navigation/native'
import React from 'react'

import * as S from './styles'
import { SearchItemRowProps } from './types'

const SearchItemRow = ({ description }: SearchItemRowProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.IconContainer>
          <S.Icon name="location-pin" />
        </S.IconContainer>
        <S.Title>{description}</S.Title>
      </S.Content>
      <S.BottomLine />
    </S.Container>
  )
}

export default SearchItemRow
