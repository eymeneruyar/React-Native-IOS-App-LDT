import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { profileStyle } from '../Util/Style'

export default function Profile() {
    return (
        <View style={profileStyle.container}>
            <Text>Welcome Profile Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
