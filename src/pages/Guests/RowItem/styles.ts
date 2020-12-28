import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-color: #f15454;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`

export const Left = styled.View``

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 24px;
`

export const Details = styled.Text`
  color: grey;
  font-size: 18px;
`

export const Right = styled.View``

export const ValueButton = styled(RectButton)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
`

export const Plus = styled(Feather).attrs({
  name: 'plus',
  size: 24,
})`
  color: #747474;
`

export const Minus = styled(Feather).attrs({
  name: 'minus',
  size: 24,
})`
  color: #747474;
`

export const Value = styled.Text`
  color: whitesmoke;
  font-size: 24px;
`
