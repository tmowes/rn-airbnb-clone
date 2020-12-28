import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import * as P from '../pages'

const { Navigator, Screen } = createMaterialTopTabNavigator()

const TopTabRoutes: React.FC = () => (
  <Navigator
    sceneContainerStyle={{ backgroundColor: '#15161E' }}
    tabBarOptions={{
      activeTintColor: '#f15454',
      indicatorStyle: {
        backgroundColor: '#f15454',
      },
      style: {
        backgroundColor: '#25262E',
      },
    }}
  >
    <Screen name="List" component={P.SearchResults} />
    <Screen name="Map" component={P.SearchResultsMap} />
  </Navigator>
)

export default TopTabRoutes
