import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store';

import Login from './src/screens/login'
import Register from './src/screens/register'
import Home from './src/screens/home'
import SecurityPin from './src/screens/securityPin'
import PinSuccess from './src/screens/pinSuccess'
import Search from './src/screens/searchReceiver'
import History from './src/screens/history'
import AmountFilled from './src/screens/amountFilled'
import PinConfirmation from './src/screens/pinConfirmation'
import ResetPassword from './src/screens/resetPassword'
import ResetPasswordFilled from './src/screens/resetPasswordFilled'

import UserProfile from './src/screens/userProfile'



import SplashScreen from './src/screens/splashScreen'
import ChangePassword from './src/screens/changePassword';
import ChangePin from './src/screens/changePin';
import ChangePinFilled from './src/screens/changePinFilled';
import OtpConf from './src/screens/otpConf';




const { persistor, store } = configureStore();

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
                            <Stack.Screen name="SplashScreen" component={SplashScreen} />
                            <Stack.Screen name='Login' component={Login} />
                            <Stack.Screen name='Register' component={Register} />
                            <Stack.Screen name='SecurityPin' component={SecurityPin} />
                            <Stack.Screen name='PinSuccess' component={PinSuccess} />
                            <Stack.Screen name='Home' component={Home} />
                            <Stack.Screen name='SearchReceiver' component={Search} />
                            <Stack.Screen name='History' component={History} />
                            <Stack.Screen name='AmountFilled' component={AmountFilled} />
                            <Stack.Screen name='PinConfirmation' component={PinConfirmation} />
                            <Stack.Screen name='ResetPassword' component={ResetPassword} />
                            <Stack.Screen name='ResetPasswordFilled' component={ResetPasswordFilled} />
                            <Stack.Screen name='UserProfile' component={UserProfile} />
                            <Stack.Screen name='ChangePassword' component={ChangePassword} />
                            <Stack.Screen name='ChangePin' component={ChangePin} />
                            <Stack.Screen name='ChangePinFilled' component={ChangePinFilled} />
                            <Stack.Screen name='OtpConf' component={OtpConf} />
                        </Stack.Navigator>
                        {/* <Register/> */}
                    </NavigationContainer>
                </PersistGate>
            </Provider>

        </>
    )
};

export default App;