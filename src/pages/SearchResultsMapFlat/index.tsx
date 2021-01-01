import React, { useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import feed from '../../data/feed'
import CustomMarker from './CustomMarker'

import * as C from '../../components'
import * as S from './styles'
import { cardWidth } from '../../components/PostCarouselItem'

const SearchResultsMap: React.FC = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState('')
  const flatlist = useRef<FlatList<S.FlatProps>>(null)
  const map = useRef<MapView>(null)

  const viewConfig = useRef({ itemVisiblePercentThreshold: 75 })
  const onViewChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  useEffect(() => {
    if (selectedPlaceId === '' || !flatlist || !map) {
      return
    }
    const index = feed.findIndex(place => place.id === selectedPlaceId)
    flatlist.current?.scrollToIndex({ index, animated: false })

    const { coordinate } = feed[index]
    const region = {
      ...coordinate,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current?.animateToRegion(region)
  }, [selectedPlaceId])

  return (
    <S.Container>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={{ width: '100%', height: '100%' }}
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

      <S.ProvidersList
        ref={flatlist}
        data={feed}
        keyExtractor={post => post.id}
        renderItem={({ item: post }) => <C.PostCarouselItem post={post} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth + 16}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}
      />
    </S.Container>
  )
}

export default SearchResultsMap
