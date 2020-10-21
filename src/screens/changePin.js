import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SmoothPinCode from 'react-native-smooth-pincode-input';
// import { ch } from '../assets/notif/handleNotification'

import Icon from 'react-native-vector-icons/AntDesign';
import style from '../styles/pinConfirmation'


const ChangePin = ({ navigation }) => {
    const [pin, setPin] = useState('');
    const [msg, setMsg] = useState(null);
    
    const handleSubmit = () => {

    }

    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header, marginLeft: 8 }}>
                <Icon name='arrowleft' size={25}
                    onPress={() => {
                        // dispatch(cancelTransferCreator())
                        navigation.goBack()
                    }} />
                <Text style={{ marginLeft: 15, fontSize: 20 }}>Enter Your PIN</Text>
            </View>
            <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42', paddingTop: 40 }}>Enter your 6 digit PIN for confirmation</Text>
            <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>continue transfering money</Text>
            <View style={style.formPin}>
                <SmoothPinCode
                    autoFocus={true}
                    codeLength={6}
                    value={pin.toString()}
                    cellStyle={style.cellPin}
                    onTextChange={(pin) => setPin(pin)}
                />
            </View>
            {msg !== null ? <Text style={errorStyle.error}>{msg}</Text> : null}
            {/* </View> */}
            <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4', alignSelf: 'center' }}
                onPress={() => {
                    handleSubmit()
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Transfer Now
                </Text>
            </TouchableOpacity>
            {/* <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                
            </View> */}
        </View>
    )
}

export default ChangePin

const errorStyle = StyleSheet.create({
    error: {
        color: 'red',
        alignSelf: 'center',
        position: 'absolute',
        top: 175,
    },
});