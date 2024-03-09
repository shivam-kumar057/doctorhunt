import React from 'react'
import {StyleSheet , View,Text, SafeAreaView} from 'react-native'
import ScreenGradient from '../compoennt/common/ScreenGradient'

const SplashScreen = () => {
    return (
             <ScreenGradient>
                 <SafeAreaView style ={styles.container}>

                 </SafeAreaView>
             </ScreenGradient>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        // backgroundColor:'red'
    }
})

export default SplashScreen