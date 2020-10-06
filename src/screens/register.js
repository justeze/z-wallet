import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { authRegisterCreator } from '../redux/actions/auth';

import styles from '../styles/login';
import * as color from '../styles/colorStyles';

const Register = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);
    const dispatch = useDispatch();

    const msg = useSelector((state) => state.auth.data);

    useEffect(() => {
        if (msg.msg === 'register success') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'SecurityPin' }],
            });
            return navigation.navigate('SecurityPin');
        }
    }, [msg, navigation]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { control, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        dispatch(authRegisterCreator(data));
    };

    const validateEmail = value => {
        if (value === /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) {
            return true
        }
        return false
    }

    const validatePassword = value => {
        if (value === /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/) {
            return true
        } 
        return false
    }

    return (
        <View style={{ ...styles.container, backgroundColor: '#E5E5E5' }}>
            <View style={styles.containerTop}>
                <Text style={styles.appText}>Zwallet</Text>
            </View>
            <View style={styles.containerBottom}>
                <Text style={styles.loginText}>Sign Up</Text>
                <Text style={styles.loginInfoText}>Create your account to access Zwallet.</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            placeholder="Enter your username"
                            leftIcon={
                                <Icon
                                    name="user"
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
                        />
                    )}
                    name="username"
                    rules={{ required: true, maxLength: 8 }}
                    defaultValue=""
                />
                {errors.username && errors.username.type === 'required' && <Text style={{ color: 'red' }}>Username is required.</Text>}
                {errors.username && errors.username.type === 'maxLength' && <Text style={{ color: 'red' }}>Username is max 8</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            name='email'
                            placeholder="Enter your e-mail"
                            leftIcon={
                                <Icon
                                    name="mail"
                                    size={20}
                                    color={color.input}
                                />
                            }
                            keyboardType="email-address"
                            inputContainerStyle={styles.input}
                            inputStyle={styles.input}
                            placeholderTextColor={color.input}
                            onBlur={onBlur}
                            onChangeText={text => onChange(text)}
                            value={value}
                        />
                    )}
                    name="email"
                    rules={{ required: true, validate: validateEmail }}
                    defaultValue=""
                />
                {errors.email && <Text style={{ color: 'red' }}>email failed</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            name='password'
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
                                    name={showPassword ? 'eye-off' : 'eye'}
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
                    rules={{ required: true, validate: validatePassword }}
                    defaultValue=""
                />
                {errors.password && <Text style={{ color: 'red' }}>password failed</Text>}
                
                {errors.password || errors.email ? (
                    <View style={styles.buttonLoginDisabled}>
                        <Text style={styles.buttonLoginTextDisabled}>Register</Text>
                    </View>
                ) : (
                        <Pressable style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.buttonLoginText}>Register</Text>
                        </Pressable>
                    )}
                <View style={styles.textSignUpContainer}>
                    <Text style={styles.textSignUp}>Already have an account? </Text>
                    <Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.textSignUpLink}>Let’s Login</Text></Pressable>
                </View>
            </View>
        </View>
    );
};

export default Register;