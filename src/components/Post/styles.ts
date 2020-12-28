import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 20px;
`

export const Title = styled.Text`
  color: whitesmoke;
  font-size: 32px;
`

export const Img = styled.Image.attrs({
  aspectRatio: 3 / 2,
  resizeMode: 'cover',
})`
  width: 100%;
  border-radius: 16px;
`

export const Bedrooms = styled.Text`
  color: #5b5b5b;
  margin: 10px 0;
`

export const Description = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  line-height: 22px;
`

export const Prices = styled.Text`
  color: whitesmoke;
  font-size: 16px;
  margin: 10px 0;
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
