import { StyleSheet } from 'react-native';
import * as color from './colorStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.backgroud,
        flex: 1,
    },
    infoText: {
        color: '#7A7886',
        fontSize: 16,
        textAlign: 'justify',
        marginHorizontal: '4%',
    },
    containerMainContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContent: {
        marginTop: '4%',
    },
    // pin
    pinContainer: {
        alignSelf: 'center',
        marginTop: '10%',
    },
    pinCell: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.primary,
        backgroundColor: color.white,
        height: 58,
        width: 47,
    },
    pinCellEmpty: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.disabled,
        backgroundColor: color.white,
        height: 58,
        width: 47,
    },
    textPin: {
        fontSize: 24,
        color: '#3A3D42',
        fontWeight: '700',
    },
    cellStyleFocused: {
        borderColor: color.primary,
        borderWidth: 2,
    },
    buttonSubmit: {
        backgroundColor: color.primary,
        marginHorizontal: '4%',
        marginBottom: '10%',
        borderRadius: 12,
        height: 57,
    },
    buttonSubmitText: {
        fontSize: 18,
        color: color.white,
        // fontWeight: '700',
    },
    buttonSubmitDisabled: {
        backgroundColor: color.disabled,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '4%',
        marginBottom: '10%',
        borderRadius: 12,
        height: 57,
    },
    buttonSubmitTextDisabled: {
        color: color.disabledText,
        fontSize: 18,
        fontWeight: '700',
    },
});


export default styles;