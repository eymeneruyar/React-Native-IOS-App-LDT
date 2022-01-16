import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Header() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/image/logo.png')}
        />
    )
}

