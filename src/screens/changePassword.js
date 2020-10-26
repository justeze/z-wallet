import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/AntDesign';

import { useForm, Controller } from 'react-hook-form';
import { updatePwdCreator, clearState } from '../redux/actions/auth';

import styles from '../styles/changePassword'
import * as color from '../styles/colorStyles';

const ChangePassword = ({ navigation }) => {
    const [securedPassword1, setSecuredPassword1] = useState(true);
    const [securedPassword2, setSecuredPassword2] = useState(true);
    const [securedPassword3, setSecuredPassword3] = useState(true);
    const handleShowPassword1 = () => {
        setSecuredPassword1(!securedPassword1);
    };
    const handleShowPassword2 = () => {
        setSecuredPassword2(!securedPassword2);
    };
    const handleShowPassword3 = () => {
        setSecuredPassword3(!securedPassword3);
    };

    const dispatch = useDispatch();

    const msg = useSelector((state) => state.auth.update.msg);
    const id = useSelector((state) => state.auth.data.id);

    console.log('kambign', msg)

    useEffect(() => {
        if (msg === 'change success') {
            navigation.goBack();
            dispatch(clearState());
        }
    }, [msg, navigation, dispatch]);

    const { control, handleSubmit, errors, getValues } = useForm();

    const onSubmit = (data) => {
        if (data.newPassword !== data.newPasswordRepeat) {
            console.log('Password didnt match');
            return;
        } else {
            dispatch(updatePwdCreator(id, data));
        }
    };

    // const validatePassword = value => {
    //     if (value === /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/) {
    //         return true
    //     }
    //     return false
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ ...styles.header, marginLeft: 8 }}>
                    <Iconn name='arrowleft' size={25}
                        onPress={() => {
                            // dispatch(cancelTransferCreator())
                            navigation.goBack()
                        }} />
                    <Text style={{ marginLeft: 15, fontSize: 20 }}>Change password</Text>
                </View>
                <Text style={styles.subtitle}>You must enter your current password and then type your new password twice.</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            placeholder="Current Password"
                            leftIcon={
                                <Icon
                                    name="lock"
                                    size={20}
                                    color={color.input}
                                />
                            }
                            rightIcon={
                                <Icon
                                    onPress={handleShowPassword1}
                                    name={securedPassword1 ? 'eye-off' : 'eye'}
                                    size={18}
                                    color={color.input}
                                />
                            }
                            inputContainerStyle={styles.input}
                            inputStyle={styles.input}
                            placeholderTextColor={color.input}
                            secureTextEntry={securedPassword1}
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
                {errors.password && errors.password.type === 'required' && <Text style={{ color: 'red', marginTop: -25, marginLeft: 25 }}>Required.</Text>}
                {errors.password && errors.password.type === 'pattern' && <Text style={{ color: 'red', marginTop: -20, marginLeft: 25 }}>{errors.password.message}</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            placeholder="New Password"
                            leftIcon={
                                <Icon
                                    name="lock"
                                    size={20}
                                    color={color.input}
                                />
                            }
                            rightIcon={
                                <Icon
                                    onPress={handleShowPassword2}
                                    name={securedPassword2 ? 'eye-off' : 'eye'}
                                    size={18}
                                    color={color.input}
                                />
                            }
                            inputContainerStyle={styles.input}
                            inputStyle={styles.input}
                            placeholderTextColor={color.input}
                            secureTextEntry={securedPassword2}
                            onBlur={onBlur}
                            onChangeText={text => onChange(text)}
                            value={value}
                        />
                    )}
                    name="newPassword"
                    rules={{
                        required: true, pattern: {
                            value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                            message: "Password must contain at least 1 number, and be longer than 8 charaters"
                        }
                    }}
                    defaultValue=""
                />
                {errors.newPassword && errors.newPassword.type === 'required' && <Text style={{ color: 'red', marginTop: -25, marginLeft: 25 }}>Required.</Text>}
                {errors.newPassword && errors.newPassword.type === 'pattern' && <Text style={{ color: 'red', marginTop: -20, marginLeft: 25 }}>{errors.newPassword.message}</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            placeholder="Repeat Password"
                            leftIcon={
                                <Icon
                                    name="lock"
                                    size={20}
                                    color={color.input}
                                />
                            }
                            rightIcon={
                                <Icon
                                    onPress={handleShowPassword3}
                                    name={securedPassword3 ? 'eye-off' : 'eye'}
                                    size={18}
                                    color={color.input}
                                />
                            }
                            inputContainerStyle={styles.input}
                            inputStyle={styles.input}
                            placeholderTextColor={color.input}
                            secureTextEntry={securedPassword3}
                            onBlur={onBlur}
                            onChangeText={text => onChange(text)}
                            value={value}
                        />
                    )}
                    name="newPasswordRepeat"
                    rules={{
                        required: true, pattern: {
                            value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                            message: "Password must contain at least 1 number, and be longer than 8 charaters"
                        }
                    }}
                    defaultValue=""
                />
                {errors.newPasswordRepeat && errors.newPasswordRepeat.type === 'required' && <Text style={{ color: 'red', marginTop: -25, marginLeft: 25 }}>Required.</Text>}
                {errors.newPasswordRepeat && errors.newPasswordRepeat.type === 'pattern' && <Text style={{ color: 'red', marginTop: -20, marginLeft: 25 }}>{errors.newPasswordRepeat.message}</Text>}

                {getValues('newPassword') !== getValues('newPasswordRepeat') && <Text style={styles.textFormError}>Password didn't match.</Text>}
            </View>
            <Button
                title="Change Password"
                buttonStyle={styles.buttonSubmit}
                titleStyle={styles.buttonSubmitText}
                onPress={handleSubmit(onSubmit)}
            />
        </SafeAreaView>
    );
};
export default ChangePassword;