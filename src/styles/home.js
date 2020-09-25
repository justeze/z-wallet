import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    userContainer: {
        padding: 20,
        marginTop: 20
        // backgroundColor: 'red'
    },
    userImg: {
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 10
    },
    userName: {
        justifyContent: 'space-between',
        marginLeft: 20,
        width: 150,
        // backgroundColor: 'green'
    },
    notifIconContainer: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        marginLeft: 110
    },
    notifIcon: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end'
    },
    balanceContainer: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        padding: 25,
        marginTop: 10,
        width: 370,
        height: 140,
        borderRadius: 15
    },
    actionBtn: {
        // backgroundColor: 'pink',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: 370,
        marginTop: 20
    },
    trfBtn: {
        backgroundColor: '#E5E8ED',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        width: 175,
        height: 60,
        borderRadius: 12
    },
    topUpBtn: {
        backgroundColor: '#E5E8ED',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        width: 175,
        height: 60,
        borderRadius: 12
    },
    transactionIndicator: {
        // backgroundColor: 'red',
        marginTop: 30,
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: 365
    },
    transactionContainer: {
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10
    },
    unameTransHistory: {
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        marginLeft: 20,
        height: 55,
        width: 150
    },
    transactionPrice: {
        // backgroundColor: 'yellow',
        width: 100,
        marginLeft: 50
    }
});
