import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import styles from '../styles/pinSuccess'
import * as color from '../styles/colorStyles';

const PinConfirmation = ({ navigation }) => {
    const [pin, setPin] = useState('');
    const [pinValid, setPinValid] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={color.backgroud} />
            <View style={styles.containerMainContent}>
                <View style={styles.topContent}>
                    <Text style={styles.infoText}>Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
                    <SmoothPinCodeInput
                        containerStyle={styles.pinContainer}
                        cellStyle={pinValid ? styles.pinCell : styles.pinCellEmpty}
                        value={pin}
                        onTextChange={(value) => setPin(value)}
                        codeLength={6}
                        textStyle={styles.textPin}
                        cellStyleFocused={styles.cellStyleFocused}
                        placeholder="__"
                        onFulfill={() => setPinValid(true)}
                        onBackspace={() => setPinValid(false)}
                    />
                </View>
                {pinValid ? (
                    <Button
                        title="Transfer Now"
                        buttonStyle={styles.buttonSubmit}
                        titleStyle={styles.buttonSubmitText}
                        onPress={() => navigation.navigate('TransferDetail')}
                    />
                ) : (
                        <View style={styles.buttonSubmitDisabled}>
                            <Text style={styles.buttonSubmitTextDisabled}>Transfer Now</Text>
                        </View>
                    )}
            </View>
        </SafeAreaView>
    );
};

export default PinConfirmation;