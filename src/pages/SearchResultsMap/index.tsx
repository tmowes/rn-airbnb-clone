import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import feed from '../../data/feed'
import CustomMarker from './CustomMarker'

import * as C from '../../components'
import * as S from './styles'
import { useWindowDimensions } from 'react-native'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'

const SearchResultsMap: React.FC = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState('')
  const width = useWindowDimensions().width
  const scroll = useAnimatedRef<Animated.ScrollView>()

  const translateX = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x
    },
  })

  useEffect(() => {
    if (selectedPlaceId === '' || !scroll) {
      return
    }
    const index = feed.findIndex(place => place.id === selectedPlaceId)
    if (scroll.current) {
      scroll.current.scrollTo({
        x: (width - 60) * index,
        animated: true,
      })
    }
  }, [selectedPlaceId])

  return (
    <S.Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1, width: '100%' }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {feed.map(place => (
          <CustomMarker
            key={place.id}
            place={place}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <ScrollView
        ref={scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 60}
        snapToAlignment={'center'}
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        // onScroll={onScroll}
        style={{ position: 'absolute', bottom: 16 }}
      >
        {feed.map(post => (
          <C.PostCarouselItem key={post.id} post={post} />
        ))}
      </ScrollView>
    </S.Container>
  )
}

export default SearchResultsMap
