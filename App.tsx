import React from 'react'
import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import pages
import Login from './pages/Login';
import Register from './pages/Register';
import TabMenu from './pages/TabMenu';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="register" component={Register} options={{ title: 'Sign Up' }} />
        <Stack.Screen name='tabMenu' component={TabMenu} options={{title: 'Home',headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})
