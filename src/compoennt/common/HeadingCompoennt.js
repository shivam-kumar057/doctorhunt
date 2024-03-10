import React from "react";
import { StyleSheet , View,Text } from "react-native";
import Scale from "../../utils/Scale";
import Icon from 'react-native-vector-icons/dist/Entypo';

const HeadingComponent = () => {
    return (
        <View style ={styles.headingStyle}>
            <Text style ={{fontSize:16,color:'gray'}}>Welcome back Bunny!</Text>
            <Text style ={{fontSize:24,color:'#262626',paddingTop:Scale(10),width:'70%'}}>What do you want to Read today ?</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    headingStyle :{
        width:'100%',
        //backgroundColor:'green',
        padding:12
    }
})

export default HeadingComponent