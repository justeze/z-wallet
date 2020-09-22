import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
// import configureStore from './src/redux/store';

import Login from './src/screens/login'
import SplashScreen from './src/screens/splashScreen'


// const { persistor, store } = configureStore();

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            {/* <Provider store={store}> */}
                {/* <PersistGate loading={null} persistor={persistor}> */}
                    <NavigationContainer>
                        <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
                            <Stack.Screen name="SplashScreen" component={SplashScreen} />
                            <Stack.Screen name='Login' component={Login} />
                        </Stack.Navigator>
                        {/* <Register/> */}
                    </NavigationContainer>
                {/* </PersistGate> */}
            {/* </Provider> */}

        </>
    )
};

export default App;