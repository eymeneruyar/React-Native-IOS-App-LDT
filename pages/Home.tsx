import React,{useState} from 'react'
import { Text, TouchableWithoutFeedback, View, Keyboard, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { homeStyle } from '../Util/Style'

export default function Home() {

    const [search, setSearch] = useState<any>();

    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={homeStyle.container}>
                <Text style={homeStyle.title}>Notes</Text>
                <SearchBar
                    placeholder='Search'
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    lightTheme={true}
                    round={true}
                    containerStyle={{
                        backgroundColor: '#fff',
                        borderWidth: 2,
                        borderRadius: 25,
                        borderColor: '#000',
                        borderBottomColor: '#000',
                        borderTopColor: '#000',
                        marginTop: 10,
                        padding: 2,
                    }}
                    inputStyle={{backgroundColor:'#fff'}}
                    inputContainerStyle={{backgroundColor:'#fff'}}
                    placeholderTextColor={'#000'}
                    searchIcon={{color:'black'}}
                    keyboardAppearance= {'dark'}
                />
                <Text style={homeStyle.subTitle}>Pinned</Text>
                <View style={homeStyle.pinnedContainer}>
                    <TouchableOpacity>
                        <Text style={homeStyle.noteTitle}>Pinned Note 1</Text>
                        <View style={{borderBottomWidth: 1,borderBottomColor: '#000',marginTop: 25, marginBottom: 10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={homeStyle.noteTitle}>Pinned Note 2</Text>
                        <View style={{borderBottomWidth: 1,borderBottomColor: '#000',marginTop: 25, marginBottom: 10}}/>
                    </TouchableOpacity>
                </View>
                <Text style={homeStyle.subTitle}>Notes</Text>
                <View style={homeStyle.pinnedContainer}>
                    <TouchableOpacity>
                        <Text style={homeStyle.noteTitle}>Note 1</Text>
                        <View style={{borderBottomWidth: 1,borderBottomColor: '#000',marginTop: 25, marginBottom: 10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={homeStyle.noteTitle}>Note 2</Text>
                        <View style={{borderBottomWidth: 1,borderBottomColor: '#000',marginTop: 25, marginBottom: 10}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}
