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
    unameInputContainer: {
        borderBottomWidth: 1.5,
        // borderBottomColor: '#6379F4',
        flexDirection: 'row',
        marginVertical: 30
    },
    pwdInputContainer: {
        borderBottomWidth: 1.5,
        flexDirection: 'row',
        // borderBottomColor: '#6379F4',
    },
    input: {
        color: 'black',
        width: 350,
        // marginBottom: 10,
        padding: 10,
    },
    forgotPwdBtn: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginTop: 15
    },
    loginBtn: {
        width: 380,
        height: 60,
        borderRadius: 12,
        marginTop: 65,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DADADA'
    },
    loginBtnInactive: {
        width: 380,
        height: 60,
        borderRadius: 12,
        marginTop: 65,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6379F4'
    },
    textError:{
        color:error,
        fontSize:16,
        fontFamily:'NunitoSans-Semi-bold',
        alignSelf:'center',
        marginTop:15
    },
    signUpBtn: {
        marginBottom: 40,
    }
});
