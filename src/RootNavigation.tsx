import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './Screens/LoginScreen';
import { ChatScreen } from './Screens/ChatScreen';



const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName={'SignIn'}>
        <Stack.Screen name="SignIn" component={LoginScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>    
    </NavigationNativeContainer>
  );
}