import React from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const ScreenGradient = ({children,gradientContainer}) => {
    return (
       
            <LinearGradient
                start={{ x: -2.9, y: -1.1}} end={{ x: 3.5, y: 2.4 }}
                //locations={[0, 0.5, 0.6]}
                colors={['#61CEFF', '#fff', '#0EBE7E']}
                style={[styles.container,gradientContainer]}
                >
                {children} 
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1
    }
})

export default ScreenGradient