import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: '#15161E',
        }}
      >
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default App
