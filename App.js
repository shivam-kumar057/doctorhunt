import React from 'react'
import {StyleSheet , View,Text, SafeAreaView} from 'react-native'
import ScreenGradient from './src/compoennt/common/ScreenGradient'
import SplashScreen from './src/screen/SplashScreen'

const App = () => {
    return (
        <SafeAreaView style ={styles.container}>
            <SplashScreen/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        //backgroundColor:'red'
    }
})

export default App