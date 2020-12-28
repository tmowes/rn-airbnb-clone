import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import TabRoutes from './tab.routes'
import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen
        name="DestinationSearch"
        component={P.DestinationSearch}
        options={{ headerShown: true, title: 'Search your destination' }}
      />
      <Screen
        name="Guests"
        component={P.Guests}
        options={{ headerShown: true, title: 'How many people?' }}
      />
    </Navigator>
  </>
)

export default AppRoutes
