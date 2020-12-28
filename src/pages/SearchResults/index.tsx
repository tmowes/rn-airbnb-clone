import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import feed from '../../data/feed'
import * as C from '../../components'

import * as S from './styles'

const SearchResults: React.FC = () => {
  return (
    <S.Container>
      <ScrollView>
        {feed.map((post, index) => (
          <C.Post post={post} key={index + post.id} />
        ))}
      </ScrollView>
    </S.Container>
  )
}

export default SearchResults
