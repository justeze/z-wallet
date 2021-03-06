import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Vibration } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import SmoothPinCode from 'react-native-smooth-pincode-input';
// import { ch } from '../assets/notif/handleNotification'

import Icon from 'react-native-vector-icons/AntDesign';
import style from '../styles/pinConfirmation'
import { showLocalNotification } from '../assets/notif/handleNotification'
import pushNotif from 'react-native-push-notification'
import { transferToConfirmationCreator } from '../redux/actions/transaction';

const SecurityPin = ({ navigation }) => {
    const [pin, setPin] = useState('');
    const [msg, setMsg] = useState(null);
    const dispatch = useDispatch()
    const route = useRoute()
    const userId = useSelector((state) => state.auth);
    const target = useSelector(state => state.transaction.transfer)
    const channelId = 'transaction'

    // const targett = useSelector(state => state.transaction.transferConfirm)

    // console.log('kambing', targett)

    const { amount, note, sender_id, receiver_id, category, type } = route.params
    // let newPin = parseInt(pin)
    // console.log(typeof(newPin))


    useEffect(() => {
        pushNotif.createChannel({
            channelId,
            channelName: 'transfer',
            channelDescription: 'kambing',
            soundName: 'default',
            importance: 4
            // vibrate: 
        })
    }, [])

    const handleSubmit = () => {
        let data = {
            id: userId.data.id,
            pin: pin
        };
        Axios.post(`http://3.81.51.4:9000/auth/getpin`, data)
            .then((res) => {
                // console.log(data.pin)
                if (res.data.data) {
                    setMsg(null)
                    // console.log('success', res.data)
                    const data = {
                        amount: amount,
                        note: note,
                        sender_id: sender_id,
                        receiver_id: receiver_id,
                        category: category,
                        type: type
                    }
                    showLocalNotification(
                        'Zwallet',
                        `Transfer to ${target.username} success`,
                        channelId,
                    );
                    dispatch(transferToConfirmationCreator(data))
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                    navigation.navigate('Home')
                    // console.log(res)
                } else {
                    // console.log('success', res.data)
                    setMsg('wrong pin')
                }
            })
            .catch((err) => {
                console.log(err)
            })

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

export default SecurityPin

const errorStyle = StyleSheet.create({
    error: {
        color: 'red',
        alignSelf: 'center',
        position: 'absolute',
        top: 175,
    },
});