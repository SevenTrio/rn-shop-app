import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

import AppNavigator from './navigation/AppNavigator';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return (
        <ReduxProvider store={store}>
            <AppNavigator />
        </ReduxProvider>
    );
};

export default App;
