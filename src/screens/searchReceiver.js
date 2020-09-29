import React, {  useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { requestUsersCreator, searchUserCreator } from '../redux/actions/users';

import Icon from 'react-native-vector-icons/AntDesign';

import profileImg from '../assets/img/lawless.jpg'
import style from '../styles/searchReceiver'
// import { ScrollView } from 'react-native-gesture-handler';

const Search = ({ navigation }) => {
    const user = useSelector((state) => state.user.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestUsersCreator())
    }, [])
    return (
        <View style={{ ...style.mainContainer }}>
            <View style={{ ...style.header }}>
                <Icon name='arrowleft' size={25}
                    onPress={() => {
                        navigation.goBack()
                    }} />
                <Text style={{ marginLeft: 15, fontSize: 20 }}>Find receiver</Text>
            </View>
            <View style={{ ...style.searchInputContainer }}>
                <Icon name='search1' size={20} style={{ padding: 12 }} />
                <TextInput
                    placeholder="Search receiver here"
                    style={{ ...style.searchInput }}
                    onChangeText={(char) => {
                        dispatch(searchUserCreator(char, 'username'))
                    }}
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
                <Text style={{ fontSize: 15 }}>All contacts</Text>
            </View>
            {/* <View style={{flex: 1}}> */}
            {user.length ? (
                <ScrollView style={{ height: 280 }}>

                    {user.map((user) => {
                        return (
                            <View style={{ ...style.searchResultContainer, }}>
                                <Image source={profileImg} style={{ ...style.profileImg }} />
                                <View style={{ ...style.userResultContainer, }}>
                                    <Text>{user.username}</Text>
                                    <Text>{user.phone_number}</Text>
                                </View>
                            </View>
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