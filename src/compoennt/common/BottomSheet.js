import React from "react";
import { StyleSheet,View,Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheet = ({refs,height,duration,openJSX}) => {
    return (
        <RBSheet
        ref={refs}
        height={height}
        openDuration={duration}
        customStyles={{
            container: styles.containerStyle
        }}
    >
      {openJSX}
    </RBSheet>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        borderTopRightRadius: 20,
                borderTopLeftRadius: 20
    }
})

export default BottomSheet