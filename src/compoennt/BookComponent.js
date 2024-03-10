import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import Scale from "../utils/Scale";
import Icon from 'react-native-vector-icons/dist/Entypo';

const BookComponent = ({ bookName, authorName, publicationYear,onPress,onPressfab ,fab,key}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: Scale(190), backgroundColor: '#FFF', margin: Scale(5), borderRadius: Scale(8), }}>
            <ImageBackground
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nNTRoHLNRlEpD-1M5TYwXpa167wlinCYUw&usqp=CAU'
                }}
                style={{ width: Scale(190), height: Scale(250),justifyContent:'flex-end' }}
                resizeMode="stretch"
            >
                <TouchableOpacity  onPress={onPressfab}>
               <Icon style ={{alignSelf:'flex-end',bottom:10,marginRight:10}} name={fab ? "heart":"heart-outlined" }size={30} color={fab ? "red":"white"} />
               </TouchableOpacity>
            </ImageBackground>
            <View style={{ padding: Scale(10), }}>
                <Text style={{ color: '#000', fontSize: Scale(17), fontWeight: "600" }}>{bookName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Scale(5) }}>
                    <Text style={{ color: 'grey', fontSize: Scale(14), fontWeight: "800" }}>{authorName}</Text>
                    <Text style={{ color: 'grey', fontSize: Scale(12), fontWeight: "800", alignSelf: 'center' }}>{publicationYear}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default BookComponent