import React,{useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import AddNotes from './AddNotes';
import Home from './Home';


export default function TabMenu() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#000',
            }}
            >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                  ),
                }}
            />
            <Tab.Screen
                name="Add Notes"
                component={AddNotes}
                options={{
                tabBarLabel: 'Add Notes',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="plus" color={color} size={size} />
                  ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user-circle-o" color={color} size={size} />
                  ),
                }}
            />
        </Tab.Navigator>
    )
}