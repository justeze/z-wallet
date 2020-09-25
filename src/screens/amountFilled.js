import React from 'react'

import { Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import IconPencil from 'react-native-vector-icons/SimpleLineIcons';
import profileImg from '../assets/img/lawless.jpg'

import style from '../styles/amountFilled'

const AmountFilled = () => {
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
                        <TouchableOpacity style={{ paddingLeft: 10 }}>
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
                        <Image source={profileImg} style={{ ...style.profileImg }} />
                        <View style={{ ...style.userTextContainer, }}>
                            <Text>kimung</Text>
                            <Text>082112524515</Text>
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