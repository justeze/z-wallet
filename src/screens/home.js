import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { historyCreator } from '../redux/actions/transaction';
import { getBalanceCreator } from '../redux/actions/auth';


import Icon from 'react-native-vector-icons/AntDesign';
import style from '../styles/home'
import profileImg from '../assets/img/lawless.jpg'
import imgPlaceHolder from '../assets/img/imgPlaceholder.jpg'

// import notifIcon from '../assets/icon/shopping-cart.png'


const Home = ({ navigation }) => {
    const auth = useSelector((state) => state.auth);
    const currentUser = useSelector(state => state.auth.data);
    const balanceCurrentUser = useSelector(state => state.auth.balance)
    // const stateHistory = useSelector(state => state.transaction.history);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(historyCreator(currentUser.id));
        dispatch(getBalanceCreator(currentUser.id))
        // console.log('babi')
    }, []);

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ ...style.userContainer, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('UserProfile')
                }}>
                    <View>
                        {auth.data === null ? <Image source={imgPlaceHolder} style={style.userImg} />
                            : auth.data.length ? <Image source={{ uri: auth.data.avatar }} style={{ ...style.userImg, }} />
                                : <Image source={imgPlaceHolder} style={style.userImg} />}
                        {/* <Image source={imgPlaceHolder} style={style.userImg} /> */}
                    </View>
                </TouchableOpacity>

                <View style={{ ...style.userName, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 20, color: 'silver' }}>Hello,</Text>
                    <Text style={{ fontSize: 20 }}>{auth.data.username}</Text>
                </View>
                <View style={{ ...style.notifIconContainer, }}>
                    {/* <Image source={notifIcon} style={{ ...style.notifIcon, }} /> */}
                    <Icon name='bells' size={25} style={{ ...style.notifIcon, }} />

                </View>
            </View>
            <View style={{ ...style.balanceContainer, flexDirection: 'column', backgroundColor: '#6379F4' }}>
                <Text style={{ color: 'white' }}>Balance</Text>

                <Text style={{ color: 'white', fontSize: 25 }}>Rp {balanceCurrentUser.balance}</Text>
                <Text style={{ color: 'white' }}>{auth.data.phone_number}</Text>
            </View>
            <View style={{ ...style.actionBtn, flexDirection: 'row' }}>
                <TouchableOpacity style={{ ...style.trfBtn, flexDirection: 'row' }} onPress={() => {
                    navigation.navigate('SearchReceiver')
                }}>
                    {/* <Image source={notifIcon} style={{ width: 30, height: 30 }} /> */}
                    <Icon name='arrowup' size={25} />
                    <Text style={{ fontSize: 20 }}>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...style.topUpBtn, flexDirection: 'row' }}>
                    {/* <Image source={notifIcon} style={{ width: 30, height: 30 }} /> */}
                    <Icon name='plus' size={25} />
                    <Text style={{ fontSize: 20 }}>Top Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ ...style.transactionIndicator, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Transaction history</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('History')
                }}>
                    <Text style={{ fontSize: 15, color: 'blue' }}>See all</Text>
                </TouchableOpacity>
            </View>
                <View style={{ ...style.transactionContainer, }}>
                    <View>
                        <Image source={profileImg} style={{ ...style.userImg, }} />
                    </View>
                    <View style={{ ...style.unameTransHistory, }}>
                        <Text style={{ fontSize: 16 }}>kimung</Text>
                        <Text style={{ fontSize: 16 }}>transfer</Text>
                    </View>
                    <View style={{ ...style.transactionPrice, }}>
                        <Text style={{ alignSelf: 'flex-end' }}>kimung</Text>
                    </View>
                </View>
        </View>
    )
}

export default Home
