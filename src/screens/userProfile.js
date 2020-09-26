
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Switch,
    TouchableOpacity,
} from 'react-native';
import style from '../styles/userProfile';
import Icon from 'react-native-vector-icons/Feather';
import imgUser from '../assets/img/lawless.jpg';

const UserProfile = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((f) => !f);

    return (
        <View style={style.container}>
            <View style={style.tab}>
                <Icon name="arrow-left" size={30} color="#4D4B57" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.profile}>
                    <Image source={imgUser} style={style.imgUser} />
                    <View style={style.edit}>
                        <Icon name="edit-2" color="#7A7886" />
                        <Text style={style.editTxt}>Edit</Text>
                    </View>
                    <Text style={style.name}>Robert Charter</Text>
                    <Text style={style.phone}>+62305-4545-4545</Text>
                </View>
                <View style={{ padding: 20, }}>
                    <View style={style.listOperation}>
                        <Text style={style.nameOperation}>Personal Information</Text>
                        <Icon style={{ marginRight: 15 }} name="arrow-right" size={20} color="#4D4B57" />
                    </View>
                    <TouchableOpacity
                        style={style.listOperation}
                        onPress={() => {
                            navigation.navigate('changepass');
                        }}>
                        <Text style={style.nameOperation}>Change Password</Text>
                        <Icon style={{ marginRight: 15 }} name="arrow-right" size={20} color="#4D4B57" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.listOperation}
                        onPress={() => {
                            navigation.navigate('enterchangePIN');
                        }}>
                        <Text style={style.nameOperation}>Change PIN</Text>
                        <Icon style={{ marginRight: 15 }} name="arrow-right" size={20} color="#4D4B57" />
                    </TouchableOpacity>
                    <View style={style.listOperation}>
                        <Text style={style.nameOperation}>Notification</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={{ ...style.listOperation, justifyContent: 'center' }}>
                        <Text style={{ ...style.nameOperation, color: 'red' }}>Logout</Text>
                        {/* <Icon name="arrow-right" size={20} color="#4D4B57" /> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UserProfile;