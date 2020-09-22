import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


import style from '../styles/login'

const Login = () => {
    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Login</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Login to your existing account to access </Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>all the features in Zwallet</Text>
                <TextInput
                    placeholder="Enter your e-mail"
                    style={{ ...style.unameInput }}
                />
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    style={{ ...style.pwdInput }}
                />
                <TouchableOpacity style={{ ...style.forgotPwdBtn }}>
                    <Text>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{alignItems: 'center'}}>
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