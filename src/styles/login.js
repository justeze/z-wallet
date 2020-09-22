import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#E5E5E5',
        // flex: 1

    },
    header: {
        height: 150,
        alignItems: 'center',
        paddingTop: 50,
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
        paddingTop: 25,
        paddingBottom: 15
    },
    contentTextLoginDesc: {
        textAlign: 'center',
        paddingVertical: 5,
        paddingLeft: 75,
        paddingRight: 75
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
    pwdInput: {
        color: 'black',
        width: 350,
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#6379F4',
    },
    forgotPwdBtn: {
        alignSelf: 'flex-end',
        marginRight: 30
    },
    loginBtn: {
        width: 350,
        height: 60,
        borderRadius: 12,
        marginTop: 65,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpBtn: {
        marginBottom: 40,
    }
});
