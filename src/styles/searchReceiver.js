import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 15
    },
    searchInputContainer: {
        backgroundColor: '#E5E8ED',
        width: 380,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    quickAccessText: {
        marginLeft: 20,
        marginBottom: 15
    },
    quickAccessContainer: {
        backgroundColor: 'white',
        padding: 15,
        width: 95,
        marginLeft: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    searchResultText: {
        // padding: 15,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10
    },
    searchResultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10
    },
    userResultContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        height: 55, 
        justifyContent: 'space-between', 
        // backgroundColor: 'yellow'
    }
});
