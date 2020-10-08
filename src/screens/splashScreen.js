import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Splash from '../assets/img/lawless.jpg'

const Splashscreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'Login',
                },
            ],
        });
    }, 2000);
    return (
        <View source={Splash}
            style={{
                ...styles.container,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}>
            <Text style={styles.title}>Zwallet</Text>
        </View >
    )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6379f4',
        // height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'Bold'
    }
})