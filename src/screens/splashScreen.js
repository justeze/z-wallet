import React from 'react'
import { View, Image, Dimensions } from 'react-native';
import Splash from '../assets/img/lawless.jpg'

const Splashscreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'Home',
                },
            ],
        });
    }, 2000);
    return (
        <View source={Splash}
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                backgroundColor: 'white',
                paddingTop: '70%',
            }}>
            <Image source={Splash}
                style={{ width: 192, height: 192, alignSelf: 'center', resizeMode: 'cover' }}>

            </Image>
        </View >
    )
}

export default Splashscreen