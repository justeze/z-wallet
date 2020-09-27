import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import { authRegisterCreator } from '../redux/actions/auth'

import Icon from 'react-native-vector-icons/AntDesign'
import Iconn from 'react-native-vector-icons/Feather'


import style from '../styles/register'

const Register = ({ navigation }) => {
    const dispatch = useDispatch();
    const register = useSelector((state) => state.auth.isLogin);

    const [form, setform] = useState({ name: null, email: null, password: null });

    if (register) {
        // console.log(form.email)
        navigation.navigate('SecurityPin', { email: form.email, password: form.password });
    }

    return (
        <View style={{ ...style.mainContiner, backgroundColor: '#E5E5E5' }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Sign Up</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Create your account to access Zwallet</Text>
                <View style={{ ...style.unameInputContainer, }}>
                    <Icon
                        name='user'
                        size={20}
                        style={{ alignSelf: 'center' }}
                        color={'#6379F4'}
                    />
                    <TextInput
                        placeholder="Enter your username"
                        style={{ ...style.input }}
                        onChangeText={(text) => setform({ ...form, name: text })}
                    />
                </View>
                <View style={{ ...style.emailInputContainer, }}>
                    <Icon
                        name='mail'
                        size={20}
                        style={{ alignSelf: 'center' }}
                        color={'#6379F4'}
                    />
                    <TextInput
                        placeholder="Enter your e-mail"
                        style={{ ...style.input }}
                        onChangeText={(text) => setform({ ...form, email: text })}
                    />
                </View>
                <View style={{ ...style.pwdInputContainer, }}>
                    <Iconn
                        name='lock'
                        size={20}
                        style={{ alignSelf: 'center' }}
                        color={'#6379F4'}
                    />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        style={{ ...style.input }}
                        onChangeText={(text) => setform({ ...form, password: text })}
                    />
                </View>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}
                    onPress={() => {
                        dispatch(authRegisterCreator(form.email, form.name, form.password))
                    }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#3A3D42' }}>Already have an account? Let's </Text>
                    <TouchableOpacity style={{ ...style.signUpBtn }}
                        onPress={() => {
                            navigation.navigate('Login')
                        }}>
                        <Text style={{ color: '#6379F4' }}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register