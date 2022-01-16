import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { homeStyle } from '../Util/Style'

export default function Home() {
    return (
        <View style={homeStyle.container}>
            <Text>Welcome to home page</Text>
        </View>
    )
}
