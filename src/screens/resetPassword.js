import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';
import style from '../styles/resetPassword'
import { clearState, sendEmailCreator } from '../redux/actions/auth';

const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const mail = useSelector((state) => state.auth.email)
    // console.log('kambingg', mail)

    useEffect(() => {
        if (mail.status === 200) {
            navigation.navigate('OtpConf')
            // dispatch(clearState())
        }
    }, [mail.status, navigation, dispatch])

    const onSubmitEmail = () => {
        const data = {
            email: email
        }
        // console.log('kuda', data)
        dispatch(sendEmailCreator(data))
        // dispatch(clearState())

    }


    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>


            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Reset Password</Text>
                <Text style={{ ...style.contentTextLoginDesc, }}>Enter your Zwallet e-mail so we can send</Text>
                <Text style={{ ...style.contentTextLoginDesc, marginBottom: 35 }}>you a password reset link</Text>
                <View style={{ width: 350 }}>
                    <Input
                        placeholder="Enter your e-mail"
                        leftIcon={
                            <Icon
                                name="mail"
                                size={20}
                                color={color.input}
                            />
                        }
                        inputContainerStyle={style.input}
                        inputStyle={style.input}
                        placeholderTextColor={color.input}
                        keyboardType="email-address"
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                    />
                </View>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}
                    onPress={() => {
                        onSubmitEmail()
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

export default ResetPassword