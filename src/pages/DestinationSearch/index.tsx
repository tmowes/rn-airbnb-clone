import React from 'react'
import * as S from './styles'
import SearchItemRow from './SearchItemRow'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GOOGLE_PLACE_KEY } from '../../secrets/googleplace'

const DestinationSearch: React.FC = () => {
  const { navigate } = useNavigation()
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Content>
        <S.Input
          onPress={(_, details = null) => {
            navigate('Guests', { viewport: details?.geometry.viewport })
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACE_KEY,
            language: 'en',
            types: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={({ description }) => (
            <SearchItemRow description={description} />
          )}
        />
      </S.Content>
    </S.Container>
  )
}

export default DestinationSearch
