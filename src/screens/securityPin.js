import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserCreator } from '../redux/actions/auth';
import SmootPinCode from 'react-native-smooth-pincode-input';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


import style from '../styles/securityPin'

const SecurityPin = ({ navigation }) => {
    const [pin, setPin] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.update);
    // console.log(auth.msg)

    if (auth.msg === 'edit success') {
        navigation.reset({
            index: 0,
            routes: [{ name: 'PinSuccess'}],
        });
        navigation.navigate('PinSuccess');
    } 
    return (
        <View style={{ ...style.mainContiner }}>
            <View style={{ ...style.header }}>
                <Text style={{ fontSize: 30, color: '#6379F4' }}>Zwallet</Text>
            </View>
            <View style={{ ...style.secContainer, backgroundColor: 'white' }}>
                <Text style={{ ...style.contentTextLogin, fontSize: 25 }}>Create Security PIN</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>Create a PIN that's contain 6 digits number for</Text>
                <Text style={{ ...style.contentTextLoginDesc, color: '#3A3D42' }}>security purpose in Zwallet</Text>
                <View style={style.formPin}>
                    <SmootPinCode
                        autoFocus={true}
                        codeLength={6}
                        value={pin.toString()}
                        cellStyle={style.cellPin}
                        onTextChange={(pin) => setPin(pin)}
                    />
                </View>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ ...style.loginBtn, backgroundColor: '#6379F4' }}
                    onPress={() => {
                        
                        // console.log('ini email',auth)
                        if (pin.length === 6) {
                            dispatch(
                                updateUserCreator(null, null, Number(pin), null, auth.email),
                            );
                        }
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecurityPin