import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';


import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';
import style from '../styles/resetPassword'
import { resetPasswordCreator, clearState } from '../redux/actions/auth';

const SecurityPin = ({ navigation }) => {
    const dispatch = useDispatch();

    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [msg1, setMsg1] = useState(null);
    const [msg2, setMsg2] = useState(null);
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordd, setShowPasswordd] = useState(true);



    const mail = useSelector((state) => state.auth.email)
    console.log('kambing',mail)

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowPasswordd = () => {
        setShowPasswordd(!showPasswordd);
    };

    useEffect(() => {

    }, [])

    const handleSubmit = () => {
        const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
        if (pass1 === '') {
            setMsg1('require');
        } else if (pass2 === '') {
            setMsg2('require');
        } else if (!checkPass.test(pass1)) {
            setMsg1('Password must contain at least 1 number, and be longer than 8 charaters.');
            setMsg2(null);
        } else if (pass1 !== pass2) {
            setMsg2('Password is not mathed');
        } else {
            const data = {
                email: mail.email,
                password: pass1
            }
            dispatch(resetPasswordCreator(data));
            dispatch(clearState())
            navigation.navigate('Login')
        }
    }

    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Reset Password</Text>
                <Text style={{ ...style.contentTextLoginDesc, }}>Create and confirm your new password so</Text>
                <Text style={{ ...style.contentTextLoginDesc, marginBottom: 35 }}>you can login to Zwallet</Text>
                <View style={{ width: 350 }}>
                    <Input
                        placeholder="Enter your password"
                        leftIcon={
                            <Icon
                                name="lock"
                                size={20}
                                color={color.input}
                            />
                        }
                        rightIcon={
                            <Icon
                                onPress={handleShowPassword}
                                name={showPassword ? "eye-off" : "eye"}
                                size={18}
                                color={color.input}
                            />
                        }
                        secureTextEntry={showPassword}
                        inputContainerStyle={style.input}
                        inputStyle={style.input}
                        placeholderTextColor={color.input}
                        onChangeText={(text) => {
                            setPass1(text)
                        }}
                    />
                    {msg1 === null ? null : <Text style={{ color: 'red' }}>{msg1}</Text>}
                    <Input
                        placeholder="Enter your password"
                        leftIcon={
                            <Icon
                                name="lock"
                                size={20}
                                color={color.input}
                            />
                        }
                        rightIcon={
                            <Icon
                                onPress={handleShowPasswordd}
                                name={showPasswordd ? "eye-off" : "eye"}
                                size={18}
                                color={color.input}
                            />
                        }
                        secureTextEntry={showPasswordd}
                        inputContainerStyle={{ ...style.input, }}
                        inputStyle={style.input}
                        placeholderTextColor={color.input}
                        onChangeText={(text) => {
                            setPass2(text)
                        }}
                    />
                    {msg2 === null ? null : <Text style={{ color: 'red' }}>{msg2}</Text>}

                </View>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4', marginTop: 85 }}
                    onPress={() => {
                        handleSubmit();
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecurityPin