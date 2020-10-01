import React, { useState, useEffect } from 'react'

import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, BackHandler } from 'react-native'
import { cancelTransferCreator } from '../redux/actions/transaction';
import { addToTransferCreator } from '../redux/actions/transaction';
import { useDispatch, useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/AntDesign';
import IconPencil from 'react-native-vector-icons/SimpleLineIcons';
import profileImg from '../assets/img/lawless.jpg'
import imgPlaceHolder from '../assets/img/imgPlaceholder.jpg'





import style from '../styles/amountFilled'

const AmountFilled = ({ navigation }) => {
    const dispatch = useDispatch()

    const backAction = () => {
        navigation.goBack()
        return dispatch(cancelTransferCreator());
    };

    const data = useSelector(state => state.transaction.transfer)
    console.log(data)

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    return (
        <View style={{ ...style.navbarContainer, }}>
            <StatusBar barStyle="default" backgroundColor="#6379F4" />
            <View style={style.header}>
                <View
                    style={{
                        flex: 1,
                        // alignItems: 'center',
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                    }}>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ paddingLeft: 10 }}
                            onPress={() => {
                                navigation.goBack()
                                dispatch(cancelTransferCreator())
                            }}>
                            <Icon name="arrowleft" size={30} color="white" />
                        </TouchableOpacity>
                        <Text
                            style={{
                                paddingLeft: 20,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            Transfer
                        </Text>
                    </View>
                    <View style={{ ...style.userContainer }}>
                        {data === null ? <Image source={imgPlaceHolder} style={style.profileImg} />
                            : data.length ? <Image source={{ uri: data.avatar }} style={{ ...style.profileImg, }} />
                                : <Image source={imgPlaceHolder} style={style.profileImg} />}
                        {/* <Image source={profileImg} style={{ ...style.profileImg }} /> */}
                        <View style={{ ...style.userTextContainer, }}>
                            <Text>{data.username}</Text>
                            <Text>{data.phone_number}</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ ...style.content, }}>
                <TextInput
                    placeholder="0.00"
                    keyboardType="numeric"
                    style={{ ...style.inputAmount, }}
                />
                <Text style={{ ...style.balanceAvail, }}>Rp 120.000 available</Text>
                <View style={{ ...style.notesInputContainer }}>
                    <IconPencil name='pencil' size={20} style={{ ...style.notesIcon, }} />
                    <TextInput style={{ ...style.notesInput, }} placeholder='add some notes' />
                </View>
            </View>
        </View>
    )
}

export default AmountFilled