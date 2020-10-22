import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginCreator } from '../redux/actions/auth';

import styles from '../styles/login';
import * as color from '../styles/colorStyles';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    const dispatch = useDispatch();
    const login = useSelector(
        (state) => state.auth
    );

    // console.log(login.data)

    useEffect(() => {
        if (login.data.msg === 'login success') {
            setErrMsg(null)
            reset()
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
            return navigation.navigate('Home');
        }
        if (login.data.status === 500) {
            setErrMsg('Wrong email or password')
        }
    }, [login.data, navigation]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { control, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        dispatch(authLoginCreator(data))
    };

    return (

        <View style={{ ...styles.container, backgroundColor: '#E5E5E5' }}>

            <View style={{ ...styles.containerTop, }}>
                <Text style={styles.appText}>Zwallet</Text>
            </View>

            <View style={styles.containerBottom}>
                {/* <ScrollView> */}
                <Text style={{ ...styles.loginText, }}>Login</Text>
                <Text style={styles.loginInfoText}>Login to your existing account to access all the features in Zwallet.</Text>
                <View>
                    {errMsg === null ? null : (
                        <Text style={{ color: 'red', display: 'flex', alignSelf: 'center' }}>{errMsg}</Text>
                    )}
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                placeholder="Enter your e-mail"
                                leftIcon={
                                    <Icon
                                        name="mail"
                                        size={20}
                                        color={color.input}
                                    />
                                }
                                inputContainerStyle={styles.input}
                                inputStyle={styles.input}
                                placeholderTextColor={color.input}
                                onBlur={onBlur}
                                onChangeText={text => onChange(text)}
                                value={value}
                                keyboardType="email-address"
                            />
                        )}
                        name="email"
                        rules={{
                            required: true, pattern: {
                                value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                                message: "its not an email"
                            }
                        }}
                        defaultValue=""
                    />
                    {errors.email && errors.email.type === 'required' && <Text style={{ color: 'red', marginTop: -25 }}>Required.</Text>}
                    {errors.email && errors.email.type === 'pattern' && <Text style={{ color: 'red', marginTop: -25 }}>{errors.email.message}</Text>}
                </View>
                <View>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
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
                                inputContainerStyle={styles.input}
                                inputStyle={styles.input}
                                placeholderTextColor={color.input}
                                onBlur={onBlur}
                                onChangeText={text => onChange(text)}
                                value={value}
                            />
                        )}
                        name="password"
                        rules={{
                            required: true, pattern: {
                                value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                                message: "Password must contain at least 1 number, and be longer than 8 charaters"
                            }
                        }}
                        defaultValue=""
                    />
                    {errors.password && errors.password.type === 'required' && <Text style={{ color: 'red', marginTop: -25 }}>Required.</Text>}
                    {errors.password && errors.password.type === 'pattern' && <Text style={{ color: 'red', marginTop: -20 }}>{errors.password.message}</Text>}

                    <Pressable onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.textForgotPass}>Forgot password?</Text>
                    </Pressable>
                </View>
                {errors.password || errors.email ? (
                    <View style={styles.buttonLoginDisabled}>
                        <Text style={styles.buttonLoginTextDisabled}>Login</Text>
                    </View>
                ) : (
                        <Pressable style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.buttonLoginText}>Login</Text>
                        </Pressable>
                    )}
                <View style={styles.textSignUpContainer}>
                    <Text style={styles.textSignUp}>Don’t have an account? Let’s </Text>
                    <Pressable onPress={() => navigation.navigate('Register')}><Text style={styles.textSignUpLink}>Sign Up</Text></Pressable>
                </View>
                {/* </ScrollView> */}
            </View>
        </View >

    );
};

export default Login;