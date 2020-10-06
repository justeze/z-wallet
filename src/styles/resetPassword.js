import { StyleSheet } from 'react-native';
import * as color from './colorStyles';

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
        paddingRight: 60,
        color: '#3A3D42'
    },
    input: {
        fontSize: 16,
        borderColor: color.input,
     },
    loginBtn: {
        width: 350,
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
