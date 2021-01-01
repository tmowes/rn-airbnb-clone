import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export interface FlatProps {
  id: string
  image: string
  type: string
  title: string
  bed: number
  bedroom: number
  oldPrice: number
  newPrice: number
  totalPrice: number
  coordinate: {
    latitude: number
    longitude: number
  }
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ProvidersList = styled(FlatList as new () => FlatList<FlatProps>)`
  position: absolute;
  bottom: 16px;
`
