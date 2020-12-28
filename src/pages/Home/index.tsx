import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import * as C from '../../components'
import feed from '../../data/feed'
import * as S from './styles'

const Home: React.FC = () => {
  const { navigate } = useNavigation()
  return (
    <S.Container>
      <S.SearchButton onPress={() => navigate('DestinationSearch')}>
        <S.SearchIcon name="search" />
        <S.SearchLabel>Where are you going?</S.SearchLabel>
      </S.SearchButton>
      <S.ImgBg source={require('../../assets/wallpaper.jpg')}>
        <S.Title>Go Near</S.Title>
        <S.ExploreButton onPress={() => console.warn('Explore')}>
          <S.ExploreLabel>Explore nearby stays</S.ExploreLabel>
        </S.ExploreButton>
      </S.ImgBg>
    </S.Container>
  )
}

export default Home
