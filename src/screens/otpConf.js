import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SmoothPinCode from 'react-native-smooth-pincode-input';


import Icon from 'react-native-vector-icons/AntDesign';
import style from '../styles/pinConfirmation'



const OtpConf = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const [errMsg, setErrMsg] = useState(null);

    const otpMail = useSelector((state) => state.auth.email.otp)
    // console.log(mail)

    const handleSubmit = () => {
        if (parseInt(otp) === otpMail) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'ResetPasswordFilled' }],
            });
            navigation.navigate('ResetPasswordFilled');
        } else {
            setErrMsg('Wrong otp')
        }
        return
    }

    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header, marginLeft: 8 }}>
                <Icon name='arrowleft' size={25}
                    onPress={() => {
                        // dispatch(cancelTransferCreator())
                        navigation.goBack()
                    }} />
                <Text style={{ marginLeft: 15, fontSize: 20 }}>Otp</Text>
            </View>
            <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42', paddingTop: 40 }}>Type your new 4 digits that sent form your</Text>
            <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Email</Text>
            <View style={style.formPin}>
                <SmoothPinCode
                    autoFocus={true}
                    codeLength={4}
                    value={otp.toString()}
                    cellStyle={style.cellPin}
                    onTextChange={(otp) => setOtp(otp)}
                />
            </View>
            {errMsg !== null ? <Text style={errorStyle.error}>{errMsg}</Text> : null}
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

export default OtpConf

const errorStyle = StyleSheet.create({
    error: {
        color: 'red',
        alignSelf: 'center',
        position: 'absolute',
        top: 175,
    },
});