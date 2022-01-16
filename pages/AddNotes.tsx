import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { addNotes } from '../Util/Style'

export default function AddNotes() {
    return (
        <View style={addNotes.container}>
            <Text>Welcome to add notes page</Text>
        </View>
    )
}

