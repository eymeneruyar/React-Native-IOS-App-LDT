import React,{useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import AddNotes from './AddNotes';
import Home from './Home';
import { Image, TouchableOpacity,View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

function LogoTitle() {
    return (
      <Image
        style={{ resizeMode:'contain',aspectRatio: 2}}
        source={require('../assets/image/logo.png')}
      />
    );
}

function ButtonMenu(navigation:any){
    return (
        <TouchableOpacity onPress={(e) => navigation.navigate('login')}>
            <View style={{marginRight:10}}>
                <Icon
                    name='sign-out'
                    type='font-awesome'
                    size={30}
                />
            </View>
            
        </TouchableOpacity>
    )
}

export default function TabMenu({ navigation }: any) {

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
                    headerTitle: (props) => <LogoTitle {...props} />,
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
                    headerTitle: (props) => <LogoTitle {...props} />,
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
                    headerRight: () => (
                        ButtonMenu(navigation)
                    ),
                    headerTitle: (props) => <LogoTitle {...props} />,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle-o" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}