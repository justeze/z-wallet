import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcff',
    },
    header: {
        height: 80,
        backgroundColor: '#6379F4',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    content: {
        flex: 1,
    },
    cardHistori: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    btnGroup: {
        flex: 1,
        // backgroundColor: 'red',
        position: 'absolute',
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        alignSelf: 'center',
        marginTop: 515,
    },
    btnArrow: {
        width: 57,
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    btnFilter: {
        width: 189,
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
});
