import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import style from '../styles/home'
import profileImg from '../assets/img/lawless.jpg'

const History = () => {
    return (
        <View>
            <View style={style.container}>
                <StatusBar barStyle="default" backgroundColor="#6379F4" />
                <View style={style.header}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                        }}>
                        <TouchableOpacity style={{ paddingLeft: 10 }}>
                            <IconFeather name="arrow-left" size={30} color="white" />
                        </TouchableOpacity>
                        <Text
                            style={{
                                paddingLeft: 20,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            History
                        </Text>
                    </View>
                </View>
                <View style={style.content}>

                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 16, color: '#7A7886' }}>This Week</Text>
                    </View>

                    <View style={style.cardHistori}>
                        <View>
                            <Image
                                source={profileImg}
                                style={{ width: 52, height: 52, borderRadius: 10 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 10 }}>
                            <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
                                Samuel Suhi
                    </Text>
                            <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
                                Transfer
                    </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: '#1EC15F', fontSize: 18, fontWeight: 'bold' }}>
                                +Rp. 50.000
                    </Text>
                        </View>
                    </View>
                    <View style={style.cardHistori}>
                        <View style={{}}>
                            <Image
                                source={profileImg}
                                style={{ width: 52, height: 52, borderRadius: 10 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 10 }}>
                            <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
                                Nawirudin
                    </Text>
                            <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
                                Subscription
                    </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: '#FF5B37', fontSize: 18, fontWeight: 'bold' }}>
                                -Rp. 49.000
                    </Text>
                        </View>
                    </View>

                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 16, color: '#7A7886' }}>This Month</Text>
                    </View>
                    <View style={style.cardHistori}>
                        <View>
                            <Image
                                source={profileImg}
                                style={{ width: 52, height: 52, borderRadius: 10 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 10 }}>
                            <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
                                Samuel Suhi
                    </Text>
                            <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
                                Transfer
                    </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: '#1EC15F', fontSize: 18, fontWeight: 'bold' }}>
                                +Rp. 50.000
                    </Text>
                        </View>
                    </View>
                    <View style={style.cardHistori}>
                        <View style={{}}>
                            <Image
                                source={profileImg}
                                style={{ width: 52, height: 52, borderRadius: 10 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 10 }}>
                            <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
                                Nawirudin
                    </Text>
                            <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
                                Subscription
                    </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: '#FF5B37', fontSize: 18, fontWeight: 'bold' }}>
                                -Rp. 49.000
                    </Text>
                        </View>
                    </View>
                    <View style={style.cardHistori}>
                        <View style={{}}>
                            <Image
                                source={profileImg}
                                style={{ width: 52, height: 52, borderRadius: 10 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 10 }}>
                            <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
                                Wildan Dhilya
                            </Text>
                            <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
                                Transfer
                            </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ color: '#1EC15F', fontSize: 18, fontWeight: 'bold' }}>
                                +Rp. 165.000
                            </Text>
                        </View>
                    </View>
                    <View style={style.btnGroup}>
                        <TouchableOpacity style={style.btnArrow}>
                            <IconFeather name="arrow-up" size={30} color="#FF5B37" />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnArrow}>
                            <IconFeather name="arrow-up" size={30} color="#1EC15F" />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnFilter}>
                            <Text style={{ color: '#6379F4', fontSize: 18, fontWeight: 'bold' }}>
                                Filter by Date
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default History;

