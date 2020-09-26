import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import Iconn from 'react-native-vector-icons/Feather'

import style from '../styles/login'

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(true);

    const allEmpty = () => {
        if (email === '' || pass === '') {
            return true;
        } else {
            return false;
        }
    };

    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Login</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Login to your existing account to access </Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>all the features in Zwallet</Text>
                <View style={{ ...style.unameInputContainer, flexDirection: 'row' }}>
                    <Icon
                        name='mail'
                        size={20}
                        style={{ alignSelf: 'center' }}
                        color={email === '' ? '#878787' : '#6379F4'}
                    />
                    <TextInput
                        placeholder="Email"
                        // secureTextEntry={true}
                        style={{ ...style.input }}
                        // color={email === '' ? '#878787' : '#6379F4'}
                        onChangeText={(text) => setPass(text)}
                    />
                </View>
                <View style={{ ...style.pwdInputContainer, flexDirection: 'row' }}>
                    <Iconn
                        name='lock'
                        size={20}
                        style={{ alignSelf: 'center' }}
                        color={pass === '' ? '#878787' : '#6379F4'}
                    />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        style={{ ...style.input }}
                        onChangeText={(text) => setEmail(text)}

                    />
                </View>
                <TouchableOpacity style={{ ...style.forgotPwdBtn }}>
                    <Text>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#3A3D42' }}>Dont have an account? Let's </Text>
                    <TouchableOpacity style={{ ...style.signUpBtn }}>
                        <Text style={{ color: '#6379F4' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login