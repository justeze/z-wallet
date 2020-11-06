import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SmoothPinCode from 'react-native-smooth-pincode-input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updatePinCreator, clearState } from '../redux/actions/auth';

// import { ch } from '../assets/notif/handleNotification'

import Icon from 'react-native-vector-icons/AntDesign';
import style from '../styles/pinConfirmation'
import { useDispatch, useSelector } from 'react-redux';


const ChangePin = () => {
    const [newPin, setNewPin] = useState('');
    // const [msg, setMsg] = useState(null);
    const route = useRoute()
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const { currentPin } = route.params
    const id = useSelector((state) => state.auth.data.id);
    const msg = useSelector((state) => state.auth.update.msg);


    useEffect(() => {
        if (msg === 'change success') {
            navigation.navigate('Home');
            dispatch(clearState());
        }
    }, [msg, navigation, dispatch]);

    const handleSubmit = () => {
        const data = {
            pin: currentPin,
            newPin: newPin
        }
        // console.log('kambing', data)
        dispatch(updatePinCreator(id, data))
    }

    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header, marginLeft: 8 }}>
                <Icon name='arrowleft' size={25}
                    onPress={() => {
                        // dispatch(cancelTransferCreator())
                        navigation.goBack()
                    }} />
                <Text style={{ marginLeft: 15, fontSize: 20 }}>Change Pin</Text>
            </View>
            <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42', paddingTop: 40 }}>Type your new 6 digits security PIN to use in</Text>
            <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Zwallet</Text>
            <View style={style.formPin}>
                <SmoothPinCode
                    autoFocus={true}
                    codeLength={6}
                    value={newPin.toString()}
                    cellStyle={style.cellPin}
                    onTextChange={(pin) => setNewPin(pin)}
                />
            </View>
            {msg !== null ? <Text style={errorStyle.error}>{msg}</Text> : null}
            {/* </View> */}
            <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4', alignSelf: 'center' }}
                onPress={() => {
                    handleSubmit()
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    Change PIN
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