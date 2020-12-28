import styled from 'styled-components/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export const Container = styled.View`
  margin: 16px 16px;
`

export const Content = styled.View`
  width: 100%;
  height: 100%;
`

export const Input = styled(GooglePlacesAutocomplete).attrs({
  placeholder: 'Where are you going?',
  placeholderTextColor: 'whitesmoke',
  styles: {
    textInput: {
      color: 'whitesmoke',
      backgroundColor: '#848484',
      height: 48,
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 10,
      fontSize: 16,
      marginBottom: 16,
    },
  },
})``
