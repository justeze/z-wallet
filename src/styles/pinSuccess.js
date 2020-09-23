import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#E5E5E5',
        // flex: 1
    },
    header: {
        height: 240,
        alignItems: 'center',
        paddingTop: 120,
        // flex: 1
    },
    secContainer: {
        alignItems: 'center',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        // flex: 1
    },
    contentTextLogin: {
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 15
    },
    contentTextLoginDesc: {
        textAlign: 'center',
        paddingVertical: 5,
        paddingLeft: 30,
        paddingRight: 30
    },
    unameInput: {
        color: 'black',
        width: 350,
        marginTop: 15,
        marginBottom: 30,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#6379F4',
    },
    loginBtn: {
        width: 350,
        height: 60,
        borderRadius: 12,
        marginTop: 50,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
