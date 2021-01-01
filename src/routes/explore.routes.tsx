import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import TopTabRoutes from './toptab.routes'

const { Navigator, Screen } = createStackNavigator()

const ExploreRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#15161E' },
    }}
  >
    <Screen name="Home" component={P.Home} />
    <Screen
      name="SearchResults"
      component={TopTabRoutes}
      options={{ headerShown: true, title: 'Search your destination' }}
    />
  </Navigator>
)

export default ExploreRoutes
