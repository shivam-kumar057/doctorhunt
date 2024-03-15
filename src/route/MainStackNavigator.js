import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import { StyleSheet } from 'react-native'
import SplashScreen from '../screen/SplashScreen'
import BookScreen from '../screen/BookScreen'
import FavourateScreen from '../screen/FavourateScreen';
import DetailsScreen from '../screen/DetailsScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {

    const ScreenComponent = {
        SplashScreen,
        BookScreen,
        FavourateScreen,
        DetailsScreen,
    }

    const screenOptions = {
        headerShown: false,
       //animation: 'slide_from_left',
       presentation: 'card',
    }

    const stackScreen = () => {
        return (
            Object.entries(ScreenComponent).map(([name, component]) => {
                return (
                    <Stack.Screen name={name} component={component} />
                )
            })
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} >
                {stackScreen()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator