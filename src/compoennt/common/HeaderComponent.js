import React from "react";
import { StyleSheet , TouchableOpacity, View,Text } from "react-native";
import Scale from "../../utils/Scale";
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
const HeaderCompoennt = ({onPressWishList,wishList,backPress}) => {
    return (
        <View style ={styles.headingStyle}>
            {
                wishList ? (
                    <View style = {{flexDirection:'row',alignItems:'center'}}>
                         <TouchableOpacity onPress={backPress}>
                         <Icon2  name="arrowleft" size={30} color="black" />
                         </TouchableOpacity>
                        <Text style ={{left:10 , fontSize:Scale(20),color:'black',fontWeight:'bold'}}>WishList</Text>
                    </View>
                ) :(
                    <Icon name="menu" size={30} color="gray" />
                )
            }
            <TouchableOpacity onPress={onPressWishList}>
            {
                wishList ? (<Text></Text>): (
                    <Icon name="heart-outlined" size={30} color="red" />
                )
            }
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    headingStyle :{
        height:Scale(60),
        width:'100%',
       // backgroundColor:'gray',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:Scale(20)
        
    }
})

export default HeaderCompoennt