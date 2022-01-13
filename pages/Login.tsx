import React from 'react'
import { ScrollView, Text, View,TouchableOpacity,Image } from 'react-native'
import { Fumi } from 'react-native-textinput-effects';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Import part of util
import {iconColor } from '../Util/Constants';
import {loginStyles} from '../Util/Style';

export default function Login({ navigation }: any) {
    return (
        <View style={loginStyles.container}>
            <ScrollView>
                
                <View style={loginStyles.image}>
                <FontAwesome
                name='user-circle-o'
                size={100}
                color={'#000'}
                />
                </View>

                <Fumi
                label={'E-Mail'}
                iconClass={FontAwesome}
                iconName={'envelope-o'}
                iconColor={iconColor}
                iconSize={20}
                iconWidth={40}
                inputPadding={20}
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCapitalize='none'
                inputStyle={{ fontSize: 20 }}
                keyboardAppearance='dark'
                />
                <Fumi
                label={'Password'}
                iconClass={FontAwesome}
                iconName={'lock'}
                iconColor={iconColor}
                iconSize={20}
                iconWidth={40}
                inputPadding={20}
                secureTextEntry={true}
                inputStyle={{ fontSize: 20 }}
                keyboardAppearance='dark'
                />

                <TouchableOpacity onPress={(e) => navigation.navigate('tabMenu')}>
                <View style={ loginStyles.btnView } >
                    <Text style={ loginStyles.btnText }>Sign In</Text> 
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={ (e) => navigation.navigate('register')}>
                <View style={ loginStyles.btnView} >
                    <Text style={ loginStyles.btnText }>Sign Up</Text> 
                </View>
                </TouchableOpacity>

                <View style={loginStyles.logo}>
                    <Image source={require('../assets/image/logo.png')} />
                </View>

            </ScrollView>
        </View>
    )
}
