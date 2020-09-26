import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#6379F4',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 45,
        padding: 12,
    },
    userTextContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        height: 55,
        justifyContent: 'space-between',
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    content: {
        alignItems: 'center',
        // paddingVertical: 50
    },
    inputAmount: {
        fontSize: 40,
        paddingTop: 30
    },
    balanceAvail: {
        paddingTop: 20

    },
    notesIcon: {
        alignSelf: 'center',
        // backgroundColor: 'red'
    },
    notesInputContainer: {
        width: 380,
        flexDirection: 'row',
        borderBottomWidth: 2,
        paddingTop: 30

    },
    notesInput: {
        marginLeft: 10
    }
});
