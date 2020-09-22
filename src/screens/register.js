import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


import style from '../styles/register'

const Register = () => {
    return (
        <View style={{ ...style.mainContiner, backgroundColor: '#E5E5E5' }}>
            <View style={{ ...style.header }}>
                <Text style={{fontSize: 30, color: '#6379F4'}}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{...style.contentTextLogin, fontSize: 25}}>Sign Up</Text>
                <Text style={{...style.contentTextLoginDesc, color: '#3A3D42'}}>Create your account to access Zwallet</Text>
                <TextInput
                    placeholder="Enter your username"
                    style={{ ...style.unameInput }}
                />
                <TextInput
                    placeholder="Enter your e-mail"
                    style={{ ...style.pwdInput }}
                />
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    style={{ ...style.unameInput }}
                />
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}>
                    <Text style={{color: 'white', fontSize: 20}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#3A3D42'}}>Already have an account? Let's </Text>
                    <TouchableOpacity style={{ ...style.signUpBtn }}>
                        <Text style={{color: '#6379F4'}}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register