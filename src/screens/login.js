import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'
// import { authLoginCreator } from '../redux/actions/auth'

// import Icon from 'react-native-vector-icons/AntDesign'
// import Iconn from 'react-native-vector-icons/Feather'

import style from '../styles/login'

const Login = () => {
    // const dispatch = useDispatch();
    // const login = useSelector((state) => state.auth.isLogin);

    // const [form, setForm] = useState({ email: null, password: null });

    // if (login) {
    //     navigation.reset({
    //         index: 0,
    //         routes: [{name: 'Home'}],
    //       });
    // }

    return (
        <View style={{ ...style.mainContiner }}>
            {/* <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Login</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Login to your existing account to access </Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>all the features in Zwallet</Text>
                <View style={{ ...style.unameInputContainer,  }}>
                    <Icon
                        name='mail'
                        size={20}
                        style={{ alignSelf: 'center' }}
                        color={email === '' ? '#878787' : '#6379F4'}
                    />
                    <TextInput
                        placeholder="Email"
                        style={{ ...style.input }}
                        onChangeText={(text) => {
                            setForm({ ...form, email: text })
                        }}
                    />
                </View>
                <View style={{ ...style.pwdInputContainer,  }}>
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
                        onChangeText={(text) => {
                            setForm({ ...form, password: text })
                        }}
                    />
                </View>
                <TouchableOpacity style={{ ...style.forgotPwdBtn }}>
                    <Text>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtnInactive, }}
                    onPress={() => {
                        // console.log('kambing')
                        dispatch(authLoginCreator(form.email, form.password))
                    }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#3A3D42' }}>Dont have an account? Let's </Text>
                    <TouchableOpacity style={{ ...style.signUpBtn }}
                        onPress={() => {
                            navigation.navigate('Register');
                        }}
                    >
                        <Text style={{ color: '#6379F4' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    )
}

export default Login