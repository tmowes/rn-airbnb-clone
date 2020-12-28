import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin: 32px 16px;
  align-items: center;
  justify-content: space-between;
`
export const GuestList = styled.View`
  width: 100%;
`

export const ActionButton = styled(RectButton)`
  height: 48px;
  width: 70%;
  border-radius: 8px;
  background: #f15454;
  justify-content: center;
  align-items: center;
`

export const ActionLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: whitesmoke;
`
