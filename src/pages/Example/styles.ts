import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AnimatedContainer = styled(Animated.View)`
  width: 100px;
  height: 80px;
  background-color: orangered;
  margin: 30px;
`
