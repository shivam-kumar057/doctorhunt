import React, { useEffect, useState } from 'react'
import {StyleSheet , View,Text, SafeAreaView, Animated, Easing, ImageBackground, Image} from 'react-native'
import ScreenGradient from '../compoennt/common/ScreenGradient'
import String from '../assets/strings'

const SplashScreen = ({navigation}) => {
    const [topPosition] = useState(new Animated.Value(340))
    const [moveUIs ,setMoveUIs] = useState(false)
    const duration = 1000
    const toValue = 590

    useEffect(()=> {
        setTimeout(() => {
             navigation.replace('BookScreen')
        }, 5000);
        setTimeout(()=> {
            moveTR()
            setMoveUIs(true)
        },2000)

        return ()=> {
            clearTimeout()
            Animated.timing(topPosition , {
                toValue : toValue,
                duration :duration,
                useNativeDriver: false,
                easing : Easing.linear
            }).stop()
        }
    },[])

    const moveTR = () => {
        Animated.timing(topPosition , {
            toValue : toValue,
            duration :duration,
            useNativeDriver: false,
            easing : Easing.linear
        }).start()
    }
    return (
            //  <ScreenGradient>
                 <ImageBackground style ={styles.container}>
                     {
                        moveUIs && (
                            <Text style = {{fontSize:30,color:'gray',fontWeight:'bold'}}>Books store</Text>
                        )
                     }
                     <Animated.View style = {{bottom:topPosition , alignSelf:'center',alignItems:'center',position:'absolute'}}>
                         <Image
                           source={{
                            uri : String.book_cover
                           }}
                           style ={{height:100,width:100,}}
                           resizeMethod='stretch'
                         />
                     </Animated.View>
                 </ImageBackground>
            //  </ScreenGradient>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
       justifyContent:'center',
       alignItems:'center',
        backgroundColor:'white'
    }
})

export default SplashScreen