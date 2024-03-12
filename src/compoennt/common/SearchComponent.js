import React from "react";
import { StyleSheet , View , Text, TextInput, Platform } from "react-native";
import Scale from "../../utils/Scale";
//import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const SearchComponent = ({value,onChangeText}) => {
    return (
        <View style ={styles.container}>
             <TextInput
                placeholder="Search book"
                placeholderTextColor={"black"}
                style ={{width:'80%',  padding :Platform.OS === 'ios' && Scale(18)}}
                value={value}
                onChangeText={onChangeText}
             />
              <Icon name="search1" size={24} color="gray" />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
       margin:Scale(10),
       backgroundColor:'lightgray',
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingHorizontal:Scale(15),
       borderRadius:Scale(10),
     
       //height:Scale(70)
    }
})

export default SearchComponent