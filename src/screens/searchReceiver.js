import React, { useEffect, useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { requestUsersCreator, searchUserCreator } from '../redux/actions/users';
import { addToTransferCreator, cancelTransferCreator } from '../redux/actions/transaction';


import Icon from 'react-native-vector-icons/AntDesign';

import profileImg from '../assets/img/lawless.jpg'
import imgPlaceHolder from '../assets/img/imgPlaceholder.jpg'
import style from '../styles/searchReceiver'

const Search = ({ navigation }) => {
    const user = useSelector((state) => state.user.users)
    const dispatch = useDispatch()
    
    
    // console.log(contact)
    
    useEffect(() => {
        dispatch(requestUsersCreator())
    }, [])
    return (
        <View style={{ ...style.mainContainer }}>
            <View style={{ ...style.header, marginLeft: 8 }}>
                <Icon name='arrowleft' size={25}
                    onPress={() => {
                        // dispatch(cancelTransferCreator())
                        navigation.goBack()
                    }} />
                <Text style={{ marginLeft: 15, fontSize: 20 }}>Find receiver</Text>
            </View>
            <View style={{ ...style.searchInputContainer }}>
                <Icon name='search1' size={20} style={{ padding: 12 }} />
                <TextInput
                    placeholder="Search receiver here"
                    style={{ ...style.searchInput }}
                    onChangeText={
                        (char) =>
                            dispatch(searchUserCreator(char, 'username'))
                    }
                />
            </View>
            <View style={{ ...style.quickAccessText }}>
                <Text style={{ fontSize: 15 }}>
                    Quick Access
                </Text>
            </View>
            <View style={{ ...style.quickAccessContainer }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={profileImg} style={{ ...style.profileImg }} />
                    <Text style={{ paddingTop: 8 }}>markus</Text>
                    <Text style={{ paddingTop: 5 }}>4561</Text>
                </View>
            </View>
            <View style={{ ...style.searchResultText, }}>
                {user.length ?
                    <Text style={{ fontSize: 15 }}>{user.length} contacts</Text> :
                    <Text></Text>}
                {/* <Text style={{ fontSize: 15 }}>All contacts</Text> */}
            </View>
            {/* <View style={{flex: 1}}> */}
            {user.length ? (
                <ScrollView style={{ height: 280 }}>
                    {user.map((user) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                dispatch(addToTransferCreator(user.id, user.username, user.phone_number, user.avatar))
                                navigation.navigate('AmountFilled')
                            }}>
                                <View style={{ ...style.searchResultContainer, }}>
                                    {user === null ? <Image source={imgPlaceHolder} style={style.profileImg} />
                                        : user.length ? <Image source={{ uri: user.avatar }} style={{ ...style.profileImg, }} />
                                            : <Image source={imgPlaceHolder} style={style.profileImg} />}
                                    {/* <Image source={profileImg} style={{ ...style.profileImg }} /> */}
                                    <View style={{ ...style.userResultContainer, }}>
                                        <Text>{user.username}</Text>
                                        <Text>{user.phone_number}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>

            ) : (
                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingLeft: 20 }}>
                        <Text style={{ color: '#8F8F8F' }}>0</Text>
                        <Text style={{ color: '#8F8F8F' }}> Contacts Founds</Text>
                    </View>
                )}
            {/* </View> */}
            {/* <View style={{ ...style.searchResultContainer, }}>
                <Image source={profileImg} style={{ ...style.profileImg }} />
                <View style={{ ...style.userResultContainer, }}>
                    <Text>kimung</Text>
                    <Text>082112524515</Text>
                </View>
            </View> */}
        </View>
    )
}

export default Search