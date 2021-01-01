import React from 'react'
import { Marker } from 'react-native-maps'

import * as S from './styles'
import { CustomMarkerProps } from './types'

const CustomMarker = ({ place, isSelected, onPress }: CustomMarkerProps) => {
  const { newPrice, coordinate } = place

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <S.MarkerStyle isSelected={isSelected}>
        <S.Title isSelected={isSelected}>{`$${newPrice}`}</S.Title>
      </S.MarkerStyle>
    </Marker>
  )
}

export default CustomMarker
