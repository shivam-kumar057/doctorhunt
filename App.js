import React from 'react'
import {StyleSheet , View,Text, SafeAreaView,LogBox} from 'react-native'
import ScreenGradient from './src/compoennt/common/ScreenGradient'
import SplashScreen from './src/screen/SplashScreen'
import MainStackNavigator from './src/route/MainStackNavigator'
import store from './src/redux/config/store'
import { Provider } from 'react-redux'
console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
    const configData =  store()
    return (
        <Provider store={configData}>
        <SafeAreaView style ={styles.container}>
            <MainStackNavigator/>
        </SafeAreaView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        //backgroundColor:'red'
    }
})

export default App