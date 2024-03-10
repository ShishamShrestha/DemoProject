import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '../Navigation/routes'
import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'


const Rootstack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name={routes.DASHBOARD} component={Dashboard}/>
        <Stack.Screen name={routes.LOGIN} component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Rootstack