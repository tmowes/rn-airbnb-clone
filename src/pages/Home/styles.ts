import { Fontisto } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`

export const ImgBg = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 500px;
  justify-content: center;
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 80px;
  font-weight: bold;
  width: 70%;
  margin: 25px 25px;
`

export const SearchButton = styled(RectButton)`
  flex-direction: row;
  margin: 0 auto;
  width: 80%;
  height: 48px;
  border-radius: 24px;
  padding: 8px;
  background: whitesmoke;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  z-index: 5;
`

export const SearchIcon = styled(Fontisto).attrs({
  size: 28,
})`
  color: #f15454;
`

export const SearchLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`

export const ExploreButton = styled(RectButton)`
  height: 48px;
  width: 70%;
  border-radius: 8px;
  background: whitesmoke;
  margin-left: 25px;
  justify-content: center;
  align-items: center;
`

export const ExploreLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
