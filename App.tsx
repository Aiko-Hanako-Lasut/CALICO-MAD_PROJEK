import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigator from './src/navigation/appNavigator'
import "./src/config/Firebase";

const App = () => {
  return(
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App
