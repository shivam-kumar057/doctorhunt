import React from "react";
import { StyleSheet , View , Text, TextInput, Platform } from "react-native";
import Scale from "../../utils/Scale";
//import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import ScreenGradient from "./ScreenGradient";

const SearchComponent = ({value,onChangeText}) => {
    return (
       <ScreenGradient gradientContainer={{flex:0,margin:Scale(10),}}>
            <View style ={styles.container}>
             <TextInput
                placeholder="Search book"
                placeholderTextColor={"gray"}
                style ={{width:'90%',  padding :Platform.OS === 'ios' && Scale(18)}}
                value={value}
                onChangeText={onChangeText}
             />
              <Icon name="search1" size={24} color="gray" />
        </View>
       </ScreenGradient>
    )
}

const styles = StyleSheet.create({
    container :{
       backgroundColor:'transparent',
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingHorizontal:Scale(15),
       borderRadius:Scale(10),
       opacity:0.9
    }
})

export default SearchComponent