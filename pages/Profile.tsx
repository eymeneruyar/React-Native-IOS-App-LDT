import React,{useState} from 'react'
import {ImageBackground, ScrollView, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements'
import { profileStyle } from '../Util/Style'
import { Icon,SpeedDial } from 'react-native-elements';

export default function Profile({ navigation }: any) {

    const [speedDialOpen, setSpeedDialOpen] = useState(false);

    return (
        <View style={profileStyle.container}>
            <ScrollView>
                <ImageBackground source={require('../assets/image/book.jpeg')} style={profileStyle.backgroundImage} blurRadius={4}>
                    <View style={profileStyle.avatar}>
                        <Avatar
                            size={150}
                            rounded
                            source={require('../assets/image/profile_image.jpg')}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={profileStyle.userInfo}>Eymen Eruyar</Text>
                        <Text style={[profileStyle.userInfo,{marginTop:10,fontSize:15}]}>
                            <FontAwesome name='map-marker' color={'#fff'} size={15} />
                            İstanbul, Turkey
                        </Text>
                    </View>
                </ImageBackground>
                <View style={profileStyle.infoColumnContainer}>
                    <View style={profileStyle.infoRowContainer}>
                        <Icon
                            name = 'phone'
                            type = 'font-awesome'
                            color= '#000'
                            size={25}
                        />
                        <View style={profileStyle.verticLine}></View>
                        <Text style={profileStyle.infoText}>+ 90 554 839 8073</Text>
                    </View>
                </View>
                <View style={profileStyle.infoColumnContainer}>
                    <View style={profileStyle.infoRowContainer}>
                        <Icon
                            name = 'envelope-o'
                            type = 'font-awesome'
                            color= '#000'
                            size={20}
                        />
                        <View style={profileStyle.verticLine}></View>
                        <Text style={profileStyle.infoText}>eruyareymen@gmail.com</Text>
                    </View>
                </View>
                <View style={profileStyle.infoColumnContainer}>
                    <View style={profileStyle.infoRowContainer}>
                        <Icon
                            name = 'calendar'
                            type = 'font-awesome'
                            color= '#000'
                            size={20}
                        />
                        <View style={profileStyle.verticLine}></View>
                        <Text style={profileStyle.infoText}>25 August 1997</Text>
                    </View>
                </View>
                
            </ScrollView>
            <SpeedDial
                isOpen={speedDialOpen}
                icon={{ name: 'navicon', color: '#fff',type:'font-awesome' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setSpeedDialOpen(!speedDialOpen)}
                onClose={() => setSpeedDialOpen(!speedDialOpen)}
                color='#000'
                size='large'
            >
                <SpeedDial.Action
                    icon={{ name: 'sign-out', color: '#fff',type:'font-awesome' }}
                    title="Sign Out"
                    color='#000'
                    onPress={(e) => {
                        setSpeedDialOpen(false)
                        navigation.navigate('login') 
                    }}
                />
                <SpeedDial.Action
                    icon={{ name: 'lock', color: '#fff' }}
                    title="Change Password"
                    color='#000'
                    onPress={() => {
                        setSpeedDialOpen(false)
                        navigation.navigate('changePassword')
                    }}
                />
                <SpeedDial.Action
                    icon={{ name: 'edit', color: '#fff' }}
                    title="Edit"
                    color='#000'
                    onPress={() => {
                        console.log('Delete Something')
                        setSpeedDialOpen(false)
                    }}
                />
            </SpeedDial>
        </View>
        
    )
}
