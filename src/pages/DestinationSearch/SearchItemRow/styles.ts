import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  min-height: 56px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
`

export const Content = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`

export const Title = styled.Text`
  color: whitesmoke;
`
export const IconContainer = styled.View`
  background: #747474;
  border-radius: 8px;
  margin-right: 8px;
`

export const Icon = styled(Entypo).attrs({
  size: 28,
})`
  color: whitesmoke;
`
export const BottomLine = styled.View`
  height: 1px;
  background: #f15454;
`
