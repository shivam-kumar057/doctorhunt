import React from "react";
import { StyleSheet ,View,SafeAreaView, FlatList ,} from "react-native";
import HeaderCompoennt from "../compoennt/common/HeaderComponent";
import BookComponent from "../compoennt/BookComponent";


const FavourateScreen = ({route,navigation}) => {
    console.log("route===",route.params.wishlist)
    renderItem = ({item,index}) => {
        // let data = {
        //     authorName:{item.authors[0]?.name || '',
        // }
        // // console.log("item ===",item.title)
        return (
            <BookComponent
               authorName={item.authors[0]?.name || ''}
               bookName={item?.title || ''}
               publicationYear={item.first_publish_year || ''}
               onPress={()=>console.log("press")}
             
            //    onPressfab={()=>favourate(item?.key)}
               fab ={route.params.wishlist.includes(item?.key)}
            //    key = {item?.key}
            />
        )
    }
    return (
        <SafeAreaView style = {styles.container}>
            <HeaderCompoennt
                wishList
                backPress={()=>navigation.pop()}
                product={true}
            />
              <FlatList
                data={route?.params?.wishlist || []}
                keyExtractor={(item)=>item.id}
                renderItem={renderItem}
                numColumns={route?.params?.wishlist?.length === 1 ? 1:2}
                style ={ route?.params?.wishlist?.length >1 && {alignSelf:'center'}}
             />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        //backgroundColor:'red'
    }
})

export default FavourateScreen