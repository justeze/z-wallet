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
        paddingTop: 35,
        paddingBottom: 15
    },
    contentTextLoginDesc: {
        textAlign: 'center',
        paddingVertical: 5,
        paddingLeft: 60,
        paddingRight: 60
    },
    cellPin: {
        borderRadius: 10,
        width: 40,
        borderColor: '#6379F4',
        borderWidth: 1
    },
    formPin: {
        // width: 100,
        marginTop: 50,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginBtn: {
        width: 380,
        height: 60,
        borderRadius: 12,
        marginTop: 160,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpBtn: {
        marginBottom: 40,
    }
});
