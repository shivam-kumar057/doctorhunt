import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image,ActivityIndicator } from "react-native";
//import { Color } from "../styles/Color";
//import { textStyle } from "../styles/textStyle";

const ButtonComponent = ({ buttonText, buttonStyle, onPress, source, imagesIcon, buttonTextStyle, source1, imagesIcon1, disabled ,loading}) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.buttonContainer, buttonStyle]}>
            {
                loading ? (
                    
                    <ActivityIndicator
                    size="small"
                   // color={Color.WHITE}
                    style={{ marginLeft: 6 }}
                  />

                ) :(
                   <>
                       {
                        imagesIcon1 && (
                            <Image
                                source={source1}
                                style={styles.imageStyle}
                            />
                        )
                    }
                    <Text style={[ buttonTextStyle]}>{buttonText}</Text>
                    {
                        imagesIcon && (
                            <Image
                                source={source}
                                style={styles.imageStyle}
                            />
                        )
                    }
                   </>
                )
            }

           
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        height: 65,
        width: '88%',
        borderRadius: 8,
       backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: 15,
        width: 15,
        left: 5,
        alignSelf: 'center',
    }
})
export default ButtonComponent