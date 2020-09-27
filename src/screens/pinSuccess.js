import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import checkIcon from '../assets/icon/Ellipse-13.png'
import bgCheckIcon from '../assets/icon/Vector.png'
import style from '../styles/pinSuccess'

const SecurityPin = ({ navigation }) => {
    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Image source={checkIcon} style={{ zIndex: 1, position: 'relative', marginTop: 40 }} />
                <Image source={bgCheckIcon} style={{ zIndex: 2, position: 'absolute', marginTop: 62 }} />
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>PIN Successfully Created</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Your PIN was Successfully created and you can</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>now access all the features on Zwallet. Login to</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>your new account and start exploring</Text>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Login now!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecurityPin