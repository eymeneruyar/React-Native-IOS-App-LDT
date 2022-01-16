import React,{useState} from 'react'
import {ScrollView, View, Image, Keyboard,Text, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-elements';
import { Fumi } from 'react-native-textinput-effects'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { iconColor } from '../Util/Constants';


//Import part of util
import { registerStyle,loginStyles } from '../Util/Style'

export default function Register() {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
        );
    
    //console.log(date)

    return (
        <View style={registerStyle.container}>
            <ScrollView>

                <View style={loginStyles.image}>
                    <FontAwesome
                    name='user-circle-o'
                    size={100}
                    color={'#000'}
                    />
                </View>

                <Fumi
                    label={'Name and Surname'}
                    iconClass={FontAwesome}
                    iconName={'user'}
                    iconColor={iconColor}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={20}
                    keyboardAppearance='dark'
                />
                <DismissKeyboard>
                    <Fumi
                        label={'Birthdate'}
                        iconClass={FontAwesome}
                        iconName={'calendar'}
                        iconColor={iconColor}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={20}
                        onPressIn={() => setOpen(true)}
                        value={date.toDateString()}
                    />
                </DismissKeyboard>
                
                <DatePicker
                    modal
                    open={open}
                    mode='date'
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
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

                <TouchableOpacity onPress={null}>
                    <View style={ registerStyle.btnView} >
                        <Text style={ registerStyle.btnText }>Sign Up</Text> 
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 15}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 40, textAlign: 'center',fontSize: 20}}>or</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>

                <Button
                title="Join with Apple"
                icon={{
                  name: 'apple',
                  type: 'font-awesome',
                  size: 25,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 15 }}
                titleStyle={{fontFamily: 'Arial',fontSize: 24 }}
                buttonStyle={{
                    backgroundColor: '#000',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 25,
                    
                }}
                containerStyle={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    marginTop: 15
                }}
              />


                <View style={registerStyle.logo}>
                    <Image source={require('../assets/image/logo.png')} />
                </View>

            </ScrollView>
        </View>
    )
}

