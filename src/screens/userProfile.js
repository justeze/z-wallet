
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { View, Text, Image, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { LoggedOut, updateUserCreator } from '../redux/actions/auth'
import ImagePicker from 'react-native-image-picker';

import imgPlaceHolder from '../assets/img/imgPlaceholder.jpg'
import style from '../styles/userProfile';
import Icon from 'react-native-vector-icons/Feather';

const UserProfile = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((f) => !f);
    const dispatch = useDispatch();
    const [logout, setLogout] = useState(false);
    const auth = useSelector((state) => state.auth);
    const [image, setImage] = useState(null);


    // console.log(auth.data.avatar)
    useEffect(() => {
        if (logout) {
            dispatch(LoggedOut());
            setLogout(false);
            // console.log(logOut)
            navigation.navigate('Login');
        }
    }, [dispatch, logout, navigation]);

    const handleLogout = () => {
        setLogout(true);
    };

    const handleChoose = () => {
        const options = {
            title: 'select-picture',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            noData: true,
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return null;
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);
                const source = response;
                if (response.fileSize > 200000) {
                    // console.log('kambing')
                    setImage(null);
                    // alert();
                } else {
                    setImage(source);
                    console.log(source)
                    setTimeout(() => {
                        dispatch(
                            updateUserCreator(null, null, auth.data.pin, source, auth.data.email),
                        );
                    }, 500);
                }
            }
        });
    };

    return (
        <View style={style.container}>
            <View style={style.tab}>
                <Icon name="arrow-left" size={30} color="#4D4B57" onPress={() => {
                    navigation.goBack()
                }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.profile}>
                    {/* {image !== null ? (
                        <Image source={image} style={style.imgUser} />
                    ) : auth.data.avatar !== null ? (
                        <Image
                            source={{ uri: auth.data.avatar }}
                            style={style.imgUser}
                        />
                    ) : (
                                <Image source={imgPlaceHolder} style={style.imgUser} />
                            )} */}
                    {image !== null ? (
                        <Image source={image} style={style.imgUser} />
                    ) : auth.data === '' ? <Image source={imgPlaceHolder} style={style.imgUser} />
                            : auth.data.avatar !== '' ? <Image source={{ uri: auth.data.avatar }} style={style.imgUser} />
                                : <Image source={imgPlaceHolder} style={style.imgUser} />}

                    <View style={style.edit}>
                        <Icon name="edit-2" color="#7A7886" onPress={() => handleChoose()} />
                        <Text style={style.editTxt}>Edit</Text>
                    </View>
                    <Text style={style.name}>{auth.data.username}</Text>
                    <Text style={style.phone}>{auth.data.phone_number}</Text>
                </View>
                <View style={{ padding: 20, }}>
                    <View style={style.listOperation}>
                        <Text style={style.nameOperation}>Personal Information</Text>
                        <Icon style={{ marginRight: 15 }} name="arrow-right" size={20} color="#4D4B57" />
                    </View>
                    <TouchableOpacity
                        style={style.listOperation}
                        onPress={() => {
                            navigation.navigate('ChangePassword');
                        }}>
                        <Text style={style.nameOperation}>Change Password</Text>
                        <Icon style={{ marginRight: 15 }} name="arrow-right" size={20} color="#4D4B57" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.listOperation}
                        onPress={() => {
                            navigation.navigate('ChangePin');
                        }}>
                        <Text style={style.nameOperation}>Change PIN</Text>
                        <Icon style={{ marginRight: 15 }} name="arrow-right" size={20} color="#4D4B57" />
                    </TouchableOpacity>
                    <View style={style.listOperation}>
                        <Text style={style.nameOperation}>Notification</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={{ ...style.listOperation, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            handleLogout()
                        }}>
                            <Text style={{ ...style.nameOperation, color: 'red' }}>Logout</Text>
                        </TouchableOpacity>
                        {/* <Icon name="arrow-right" size={20} color="#4D4B57" /> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UserProfile;