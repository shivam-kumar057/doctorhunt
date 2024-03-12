import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView, TextInput, Platform } from "react-native";
import Scale from "../utils/Scale";
import ButtonComponent from "../compoennt/common/ButtonComponent";
import String from "../assets/strings";
import HeaderCompoennt from "../compoennt/common/HeaderComponent";
import BottomSheet from "../compoennt/common/BottomSheet";
import Icon from 'react-native-vector-icons/dist/Entypo';

const DetailsScreen = ({ route, navigation }) => {
    const ref = useRef()
    const [review, setReview] = useState('')

    const openReview = () => {
        return (
            <View>
                <Icon onPress={() => ref.current.close()} style={styles.crossStyle} name="cross" size={30} color="gray" />
                <View style={styles.greyBoxInput}>
                    <View style={styles.reviewInput}>
                        <ScrollView style={{ height: Scale(100) }}>
                            <TextInput
                                placeholder="Add Review"
                                placeholderTextColor={"black"}
                                onChangeText={(text) => setReview(text)}
                                multiline={true}
                            />
                        </ScrollView>
                    </View>
                    <ButtonComponent
                        buttonStyle={styles.buttonStyleView}
                        buttonText={"Sumbit Review"}
                        onPress={() => ref.current.close()}
                    />
                </View>
            </View>
        )
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <HeaderCompoennt
                    wishList={true}
                    backPress={() => navigation.pop()}
                />
                <View>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nNTRoHLNRlEpD-1M5TYwXpa167wlinCYUw&usqp=CAU'
                        }}
                        style={styles.imageBook}
                        resizeMode="stretch"
                    />
                </View>
                <View style={{ marginTop: Scale(25) }}>
                    <Text style={styles.titleText}>{route?.params?.item?.title}</Text>
                    <Text style={styles.authorText}>{route?.params?.item?.authors[0]?.name}</Text>
                    <Text style={styles.authorText}>{route?.params?.item?.first_publish_year}</Text>
                </View>
                <ScrollView style={styles.discriptionView}>
                    <Text style={{ textAlign: 'center' ,color:'black'}}>{String.dummyText}</Text>
                </ScrollView>
                <View style={styles.reviewStyle}>
                    <Text style={{ fontSize: Scale(20),color:'black' }}>Review : <Text style={{ fontSize: Scale(14),color:'black' }}>{review}</Text></Text>

                </View>
                <ButtonComponent
                    buttonStyle={styles.addButton}
                    buttonText={"Add Review"}
                    onPress={() => ref.current.open()}
                    buttonTextStyle={{color:'black'}}
                />
            </SafeAreaView>
            <BottomSheet
                refs={ref}
                height={Platform.OS === 'ios' ? Scale(250) : Scale(200)}
                openJSX={openReview()}
                openDuration={250}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Scale(15),
    },
    imageBook: {
        width: Scale(190),
        height: Scale(250),
        alignSelf: 'center'
    },
    reviewInput: {
        margin: Scale(10),
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Scale(15),
        borderRadius: Scale(10),
    },
    crossStyle: { 
        alignSelf: 'flex-end', 
        marginRight: Scale(20), 
        marginTop: Scale(20) 
    },
    greyBoxInput: { 
        height: Scale(150), 
        justifyContent: 'space-between' 
    },
    buttonStyleView: { 
        backgroundColor: 'white', 
        borderColor: 'gray', 
        borderWidth: 1, 
        bottom: Scale(5), 
        height: Scale(50), 
        width: '95%' 
    },
    titleText: { 
        color: '#000', 
        fontSize: Scale(25), 
        fontWeight: "800", 
        textAlign: 'center' 
    },
    authorText: { 
        color: 'grey', 
        fontSize: Scale(15), 
        fontWeight: "500", 
        textAlign: 'center' 
    },
    discriptionView: { 
        margin: Scale(5), 
        padding: Scale(5), 
        height: Scale(200) 
    },
    reviewStyle: { 
        height: Scale(100), 
        width: '90%', 
        alignSelf: 'center', 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: Scale(10), 
        margin: Scale(10) 
    },
    addButton: { 
        height: Scale(40), 
        width: Scale(150), 
        backgroundColor: 'white', 
        borderColor: 'gray', 
        borderWidth: 1, 
        bottom: Scale(5), 
        margin: Scale(10) 
    }
})

export default DetailsScreen