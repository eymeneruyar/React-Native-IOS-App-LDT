import React from 'react'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import { Fumi } from 'react-native-textinput-effects';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { iconColor } from '../Util/Constants';
import { changePasswordStyle } from '../Util/Style';


export default function ChangePassword() {
    return (
        <View style={changePasswordStyle.container}>
            <ScrollView>
                <Text style={changePasswordStyle.mainTitle}>Change Password</Text>
                <Fumi
                label={'Old Password'}
                iconClass={FontAwesome}
                iconName={'lock'}
                iconColor={iconColor}
                iconSize={20}
                inputPadding={20}
                secureTextEntry={true}
                inputStyle={{ fontSize: 20 }}
                keyboardAppearance='dark'
                />
                <Fumi
                label={'New Password'}
                iconClass={FontAwesome}
                iconName={'lock'}
                iconColor={iconColor}
                iconSize={20}
                inputPadding={20}
                secureTextEntry={true}
                inputStyle={{ fontSize: 20 }}
                keyboardAppearance='dark'
                />
                <Fumi
                label={'Renew Password'}
                iconClass={FontAwesome}
                iconName={'lock'}
                iconColor={iconColor}
                iconSize={20}
                inputPadding={20}
                secureTextEntry={true}
                inputStyle={{ fontSize: 20 }}
                keyboardAppearance='dark'
                />
                <View style={changePasswordStyle.infoContainer}>
                    <FontAwesome name='info-circle' size={15}/>
                    <Text style={changePasswordStyle.infoText}>
                        For your security, set a password that does not include your name, surname, and date of birth.
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style={ changePasswordStyle.btnView} >
                        <Text style={ changePasswordStyle.btnText }>Save</Text> 
                    </View>
                </TouchableOpacity>
                
            </ScrollView>
        </View>
    )
}
