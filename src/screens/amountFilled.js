import React, { useState, useEffect } from 'react'

import { Text, View, Image, TextInput, TouchableOpacity, StatusBar, BackHandler } from 'react-native'
import { cancelTransferCreator } from '../redux/actions/transaction';
import { addToTransferCreator } from '../redux/actions/transaction';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigation, useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconPencil from 'react-native-vector-icons/SimpleLineIcons';
// import profileImg from '../assets/img/lawless.jpg'
import imgPlaceHolder from '../assets/img/imgPlaceholder.jpg'

import style from '../styles/amountFilled'

const AmountFilled = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.transaction.transfer)
    const user = useSelector(state => state.auth.data)
    // console.log(user.id)
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const navigation = useNavigation();

    // const numAmount = Number(amount);

    const handleSubmit = () => {
        navigation.navigate('PinConfirmation', {
            amount: amount,
            note: note,
            sender_id: user.id,
            receiver_id: data.id,
            category: 'transfer',
            type: 'out',
            // date: date,
        });
    };

    const backAction = () => {
        navigation.goBack()
        return dispatch(cancelTransferCreator());
    };

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
                    onChangeText={(num) => {
                        setAmount(num);
                    }}
                />
                <Text style={{ ...style.balanceAvail, }}>Rp 120.000 available</Text>
                <View style={{ ...style.notesInputContainer }}>
                    <IconPencil name='pencil' size={20} style={{ ...style.notesIcon, }} />
                    <TextInput
                        style={{ ...style.notesInput, }}
                        placeholder='add some notes' 
                        onChangeText={(text) => 
                            setNote(text)}
                        />
                </View>
                <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                    <TouchableOpacity style={{ ...style.confirmBtn, backgroundColor: '#6379F4' }}
                        onPress={() => {
                            handleSubmit();
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Confirm
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AmountFilled