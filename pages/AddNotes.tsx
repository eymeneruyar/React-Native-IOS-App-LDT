import React,{useState} from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Fumi } from 'react-native-textinput-effects';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';

import {iconColor } from '../Util/Constants';
import { addNotes } from '../Util/Style' 
import { actions,RichEditor,RichToolbar } from 'react-native-pell-rich-editor';

const noteLabels = [
    // TODO - Pull these from API
    { label: 'Important', value: 'important' },
    { label: 'Very Important', value: 'veryImportant' },
    { label: 'Pinned', value: 'pinned' },
    { label: 'Other', value: 'other' },
];


export default function AddNotes() {

    const richText = React.useRef();

    return (
        <View style={addNotes.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <Fumi
                    label={'Title'}
                    iconClass={MaterialCommunityIcons}
                    iconName={'format-title'}
                    iconColor={iconColor}
                    iconSize={20}
                    inputPadding={20}
                    autoCapitalize='none'
                    inputStyle={{ fontSize: 20 }}
                />
                <View style={{flexDirection:'row'}}>
                    <MaterialCommunityIcons style={{padding:20,paddingTop:28}} name='label' size={20} color='gray' />
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={noteLabels}
                        placeholder={{
                            color: '#000',
                            inputLabel: 'Select your note label...',
                            label: 'Select your note label...',
                            value: null
                        }}
                        style={{
                            iconContainer:{
                                padding:20,
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                position: 'relative'
                            },
                            inputIOS: {
                                fontSize: 15,
                                padding: 20,
                                paddingLeft:0,
                                borderWidth: 0,
                                color: 'black',
                                marginTop: 10,
                            },
                        }}
                    />
                </View>
                
                <Text style={addNotes.noteTitle}>Note</Text>
                <View style={addNotes.noteBox}>
                    <RichToolbar
                        editor={richText}
                        actions={[ actions.keyboardAppearance,actions.setBold, actions.setItalic,actions.insertBulletsList, actions.insertOrderedList, actions.setUnderline, actions.heading1, ]}
                        iconMap={{
                            [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), 
                        }}
                        style={{backgroundColor:'#000'}}
                        iconTint='#fff'
                    />
                    <RichEditor
                        ref={richText}
                        hideKeyboardAccessoryView={false}
                        
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}





