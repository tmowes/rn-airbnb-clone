import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  flex-direction: row;
  width: ${width - 64}px;
  overflow: hidden;
  align-items: center;
  background-color: #5b5b5b60;
  border-radius: 8px;
  margin: 0 8px;
`
export const Left = styled.View``

export const Right = styled.View`
  flex: 1;
  margin: 0 8px;
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
`

export const Img = styled.Image.attrs({
  aspectRatio: 1,
  resizeMode: 'cover',
})`
  height: 100%;
`

export const Bedrooms = styled.Text`
  color: #5b5b5b;
`

export const Description = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  line-height: 22px;
  flex-wrap: wrap;
`

export const Prices = styled.Text`
  color: whitesmoke;
  font-size: 16px;
`

export const OldPrice = styled.Text`
  color: #5b5b5b;
  text-decoration-line: line-through;
`

export const NewPrice = styled.Text`
  color: whitesmoke;
  font-weight: bold;
`
export const TotalPrice = styled.Text`
  color: whitesmoke;
  color: #5b5b5b;
  text-decoration-line: underline;
`
