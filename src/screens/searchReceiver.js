import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

import profileImg from '../assets/img/lawless.jpg'
import style from '../styles/searchReceiver'

const Search = () => {
    return (
        <View style={{ ...style.mainContainer }}>
            <View style={{ ...style.header }}>
                <Icon name='arrowleft' size={25} />
                <Text style={{ marginLeft: 15, fontSize: 20 }}>Find receiver</Text>
            </View>
            <View style={{ ...style.searchInputContainer }}>
                <Icon name='search1' size={20} style={{ padding: 12 }} />
                <TextInput
                    placeholder="Search receiver here"
                    style={{ ...style.searchInput }}
                >
                </TextInput>
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
            <View style={{ ...style.searchResultText }}>
                <Text>All contacts</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <Text style={{ color: '#8F8F8F' }}>17</Text>
                    <Text style={{ color: '#8F8F8F' }}> Contacts Founds</Text>
                </View>
            </View>
            <View style={{ ...style.searchResultContainer, }}>
                <Image source={profileImg} style={{ ...style.profileImg }} />
                <View style={{ ...style.userResultContainer, }}>
                    <Text>kimung</Text>
                    <Text>082112524515</Text>
                </View>
            </View>
        </View>
    )
}

export default Search