
import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable, SafeAreaView, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
// import { API_URL } from '../utils/environment';
import {  useSelector } from 'react-redux';
// import { historyCreator } from '../redux/actions/transaction';
import { DateTime } from 'luxon';

import * as color from '../styles/colorStyles';

import defaultProfile from '../assets/img/imgPlaceholder.jpg';

const Item = ({ data }) => {
    const profilImg = `http://192.168.0.4:9000/${data.avatar}`;

    return (
        <View style={styles.containerTransaction}>
            <View style={styles.profileContainer}>
                {data.category === 'Top Up' ? null : (
                    <Image source={data.avatar === '' ? defaultProfile : ({ uri: profilImg })} style={styles.profileImg} />
                )}
                <View style={styles.textHelloContainer}>
                    {data.category === 'Top Up' ? (
                        <Text style={styles.textNameTransaction}>Top Up Zwallet</Text>
                    ) : (
                            <Text style={styles.textNameTransaction}>{data.username}</Text>
                        )}
                    <Text style={styles.textTransaction}>{data.category}</Text>
                </View>
            </View>
            {data.type === 'in' ? (
                <Text style={styles.textTransactionNumberIncome}>{`+Rp${(data.amount).toLocaleString('id-ID')}`}</Text>
            ) : (
                    <Text style={styles.textTransactionNumberOutcome}>{`-Rp${(data.amount).toLocaleString('id-ID')}`}</Text>
                )}
        </View>
    );
};

const History = () => {
    

    const stateHistory = useSelector(state => state.transaction.history);

    console.log('kambing', stateHistory)

    const startDateWeek = DateTime.local().startOf('week').toISODate();
    const endDateWeek = DateTime.local().startOf('week').plus({ days: 7 }).toISODate();
    const getThisMonth = DateTime.local().month;

    const thisWeek = stateHistory.filter((item) => {
        return (
            DateTime.fromISO(item.date).toISODate() >= startDateWeek &&
            DateTime.fromISO(item.date).toISODate() <= endDateWeek
        );
    });

    const thisMonth = stateHistory.filter((item) => {
        return (
            !thisWeek.includes(item) &&
            DateTime.fromISO(item.date).month === getThisMonth
        );
    });

    // const beforeAgain = stateHistory.filter((item) => {
    //     return (
    //         !thisWeek.includes(item) &&
    //         !thisMonth.includes(item)
    //     );
    // });

    const historyData = [
        {
            date: 'This Week',
            data: thisWeek,
        },
        {
            date: 'This Month',
            data: thisMonth,
        },
        // {
        //     date: 'Before Again',
        //     data: beforeAgain,
        // },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="default" backgroundColor={color.primary} />
            <SectionList
                sections={historyData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item data={item} />}
                renderSectionHeader={({ section: { date, data } }) => (
                    data.length === 0 ? null :
                        <View style={styles.section}>
                            <Text style={styles.sectionText}>{date}</Text>
                        </View>
                )
                }
            />
            <View style={styles.buttonFilterContainer}>
                <Button
                    icon={
                        <Icon
                            name="arrow-up"
                            size={20}
                            color={color.error}
                        />
                    }
                    titleStyle={{ color: color.error }}
                    buttonStyle={styles.buttonFillter}
                    containerStyle={{ elevation: 2, flex: 2, marginRight: 20 }}
                />
                <Button
                    icon={
                        <Icon
                            name="arrow-down"
                            size={20}
                            color={color.success}
                        />
                    }
                    titleStyle={{ color: color.success }}
                    buttonStyle={styles.buttonFillter}
                    containerStyle={{ elevation: 2, flex: 2, marginRight: 20 }}
                />
                <Button
                    title="Filter by Date"
                    titleStyle={{ color: color.primary }}
                    buttonStyle={styles.buttonFillter}
                    containerStyle={{ elevation: 2, flex: 6 }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.backgroud,
        flex: 1,
    },
    profileContainer: {
        flexDirection: 'row',
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    textHelloContainer: {
        justifyContent: 'space-between',
        height: 50,
        marginLeft: 20,
    },
    textHello: {
        fontSize: 16,
    },
    textName: {
        fontWeight: '700',
        fontSize: 18,
    },
    // 3 button
    buttonFilterContainer: {
        // marginVertical: '6%',
        marginTop: '4%',
        marginBottom: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
    },
    buttonFillter: {
        backgroundColor: color.white,
        borderRadius: 10,
        height: 57,
        // width: 57,
    },
    // Transaction
    section: {
        // marginTop: '8%',
        marginVertical: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '4%',
        alignItems: 'center',
    },
    sectionText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#7A7886',
    },
    dividerSeeAll: {
        color: color.primary,
        fontSize: 14,
    },
    containerTransaction: {
        backgroundColor: color.white,
        // marginTop: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4%',
        borderRadius: 10,
        // elevation: 3,
    },
    textNameTransaction: {
        // fontWeight: '700',
        fontSize: 15,
    },
    textTransaction: {
        color: '#7A7886',
        fontSize: 14,
    },
    textTransactionNumberIncome: {
        color: color.success,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textTransactionNumberOutcome: {
        color: color.error,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default History;

// import React from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
//     StatusBar,
//     Image
// } from 'react-native';
// import IconFeather from 'react-native-vector-icons/Feather';
// import style from '../styles/home'
// import profileImg from '../assets/img/lawless.jpg'

// const History = () => {
//     return (
//         <View>
//             <View style={style.container}>
//                 <StatusBar barStyle="default" backgroundColor="#6379F4" />
//                 <View style={style.header}>
//                     <View
//                         style={{
//                             flex: 1,
//                             alignItems: 'center',
//                             flexDirection: 'row',
//                             paddingHorizontal: 10,
//                         }}>
//                         <TouchableOpacity style={{ paddingLeft: 10 }}>
//                             <IconFeather name="arrow-left" size={30} color="white" />
//                         </TouchableOpacity>
//                         <Text
//                             style={{
//                                 paddingLeft: 20,
//                                 fontSize: 20,
//                                 fontWeight: 'bold',
//                                 color: 'white',
//                             }}>
//                             History
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={style.content}>

//                     <View style={{ padding: 15 }}>
//                         <Text style={{ fontSize: 16, color: '#7A7886' }}>This Week</Text>
//                     </View>

//                     <View style={style.cardHistori}>
//                         <View>
//                             <Image
//                                 source={profileImg}
//                                 style={{ width: 52, height: 52, borderRadius: 10 }}
//                             />
//                         </View>
//                         <View style={{ flex: 1, paddingHorizontal: 10 }}>
//                             <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
//                                 Samuel Suhi
//                     </Text>
//                             <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
//                                 Transfer
//                     </Text>
//                         </View>
//                         <View style={{ flex: 1, alignItems: 'flex-end' }}>
//                             <Text style={{ color: '#1EC15F', fontSize: 18, fontWeight: 'bold' }}>
//                                 +Rp. 50.000
//                     </Text>
//                         </View>
//                     </View>
//                     <View style={style.cardHistori}>
//                         <View style={{}}>
//                             <Image
//                                 source={profileImg}
//                                 style={{ width: 52, height: 52, borderRadius: 10 }}
//                             />
//                         </View>
//                         <View style={{ flex: 1, paddingHorizontal: 10 }}>
//                             <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
//                                 Nawirudin
//                     </Text>
//                             <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
//                                 Subscription
//                     </Text>
//                         </View>
//                         <View style={{ flex: 1, alignItems: 'flex-end' }}>
//                             <Text style={{ color: '#FF5B37', fontSize: 18, fontWeight: 'bold' }}>
//                                 -Rp. 49.000
//                     </Text>
//                         </View>
//                     </View>

//                     <View style={{ padding: 15 }}>
//                         <Text style={{ fontSize: 16, color: '#7A7886' }}>This Month</Text>
//                     </View>
//                     <View style={style.cardHistori}>
//                         <View>
//                             <Image
//                                 source={profileImg}
//                                 style={{ width: 52, height: 52, borderRadius: 10 }}
//                             />
//                         </View>
//                         <View style={{ flex: 1, paddingHorizontal: 10 }}>
//                             <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
//                                 Samuel Suhi
//                     </Text>
//                             <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
//                                 Transfer
//                     </Text>
//                         </View>
//                         <View style={{ flex: 1, alignItems: 'flex-end' }}>
//                             <Text style={{ color: '#1EC15F', fontSize: 18, fontWeight: 'bold' }}>
//                                 +Rp. 50.000
//                     </Text>
//                         </View>
//                     </View>
//                     <View style={style.cardHistori}>
//                         <View style={{}}>
//                             <Image
//                                 source={profileImg}
//                                 style={{ width: 52, height: 52, borderRadius: 10 }}
//                             />
//                         </View>
//                         <View style={{ flex: 1, paddingHorizontal: 10 }}>
//                             <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
//                                 Nawirudin
//                     </Text>
//                             <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
//                                 Subscription
//                     </Text>
//                         </View>
//                         <View style={{ flex: 1, alignItems: 'flex-end' }}>
//                             <Text style={{ color: '#FF5B37', fontSize: 18, fontWeight: 'bold' }}>
//                                 -Rp. 49.000
//                     </Text>
//                         </View>
//                     </View>
//                     <View style={style.cardHistori}>
//                         <View style={{}}>
//                             <Image
//                                 source={profileImg}
//                                 style={{ width: 52, height: 52, borderRadius: 10 }}
//                             />
//                         </View>
//                         <View style={{ flex: 1, paddingHorizontal: 10 }}>
//                             <Text style={{ color: '#4D4B57', fontSize: 16, fontWeight: 'bold' }}>
//                                 Wildan Dhilya
//                             </Text>
//                             <Text style={{ color: '#7A7886', fontSize: 14, paddingTop: 10 }}>
//                                 Transfer
//                             </Text>
//                         </View>
//                         <View style={{ flex: 1, alignItems: 'flex-end' }}>
//                             <Text style={{ color: '#1EC15F', fontSize: 18, fontWeight: 'bold' }}>
//                                 +Rp. 165.000
//                             </Text>
//                         </View>
//                     </View>
//                     <View style={style.btnGroup}>
//                         <TouchableOpacity style={style.btnArrow}>
//                             <IconFeather name="arrow-up" size={30} color="#FF5B37" />
//                         </TouchableOpacity>
//                         <TouchableOpacity style={style.btnArrow}>
//                             <IconFeather name="arrow-up" size={30} color="#1EC15F" />
//                         </TouchableOpacity>
//                         <TouchableOpacity style={style.btnFilter}>
//                             <Text style={{ color: '#6379F4', fontSize: 18, fontWeight: 'bold' }}>
//                                 Filter by Date
//                     </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>

//         </View>
//     );
// };

// export default History;

