import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'column'
    },
    header: {
        height: 120,
        alignItems: 'center',
        paddingTop: 45
    },
    secContainer: {
        alignItems: 'center',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30
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
    unameInputContainer: {
        borderBottomWidth: 1.5,
        // borderBottomColor: '#6379F4',
        flexDirection: 'row',
        marginVertical: 30
    },
    emailInputContainer: {
        borderBottomWidth: 1.5,
        flexDirection: 'row',
        marginBottom: 30
        // borderBottomColor: '#6379F4',
    },
    pwdInputContainer: {
        borderBottomWidth: 1.5,
        flexDirection: 'row',
        marginBottom: 20
        // borderBottomColor: '#6379F4',
    },
    input: {
        color: 'black',
        width: 320,
        // marginBottom: 10,
        padding: 10,

    },
    loginBtn: {
        width: 350,
        height: 60,
        borderRadius: 12,
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpBtn: {
        marginBottom: 40,
    }
});
