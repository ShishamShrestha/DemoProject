import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App from '../../App'
import Rootstack from '../components/Rootstack'
import Login from '../screens/Login'

const Rootstack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name={Rootstack.DASHBOAARD} component={App}/>
        <Stack.Screen name={Rootstack.LOGIN} component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Rootstack