import React, { useState } from 'react'
import SmootPinCode from 'react-native-smooth-pincode-input';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


import style from '../styles/securityPin'

const SecurityPin = () => {
    const [pin, setPin] = useState('');
    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Create Security PIN</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Create a PIN that's contain 6 digits number for</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>security purpose in Zwallet</Text>
                <View style={style.formPin}>
                    <SmootPinCode
                        autoFocus={true}
                        codeLength={6}
                        value={pin.toString()}
                        cellStyle={style.cellPin}
                        onTextChange={(pin) => setPin(pin)}
                    />
                </View>
                {/* <TouchableOpacity
                    style={pin.length !== 6 ? style.loginBtn : style.loginBtnActive}
                    onPress={() => {
                        if (pin.length === 6) {
                            navigation.navigate('pinsuccess')
                        }
                    }}>
                    <Text
                        style={pin.length !== 6 ? style.loginText : style.loginTextActive}>
                        Confirm
                    </Text>
                </TouchableOpacity> */}

            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}
                    // onPress={() => {
                    //     if (pin.length === 6) {
                    //         navigation.navigate('pinsuccess')
                    //     }
                    // }}
                    >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Confirm
                    </Text>
                </TouchableOpacity>
                {/* <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#3A3D42' }}>Dont have an account? Let's </Text>
                    <TouchableOpacity style={{ ...style.signUpBtn }}>
                        <Text style={{ color: '#6379F4' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
}

export default SecurityPin