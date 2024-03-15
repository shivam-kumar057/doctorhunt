import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import HeaderCompoennt from '../compoennt/common/HeaderComponent'
import HeadingComponent from '../compoennt/common/HeadingCompoennt'
import SearchComponent from '../compoennt/common/SearchComponent'
import BookComponent from '../compoennt/BookComponent'
import {  useDispatch, useSelector } from 'react-redux'
import { fetchBookData } from '../redux/action/BookAction'
import Preferences from '../utils/LocalStorage'
import BottomSheet from '../compoennt/common/BottomSheet'
import Scale from '../utils/Scale'
import Icon from 'react-native-vector-icons/dist/Entypo';
import ScreenGradient from '../compoennt/common/ScreenGradient'

const BookScreen = (props) => {
    const select = useSelector((state) => state.BookReducer.list)
    const loader = useSelector((state)=>state.BookReducer.loading)
    const dispatch = useDispatch()
    const [book, setBook] = useState(select || [])
    const [data, setData] = useState('')
    const [favorites, setFavorites] = useState([]);
    const [loading,setLoading] = useState(true)
    const ref =  useRef()
    const [removeWishList,setRemoveWishList] = useState(false)
   

    useEffect(() => {
        loadFavorites();
        dispatch(fetchBookData())
    }, [])


    useEffect(() => {
        setBook(select || []);
        setLoading(loader)
       
      }, [select,loader]);

    useEffect(() => {
        saveFavorites();
        setBook(select)
    }, [favorites]);

  
    const favourate = useCallback((itemId) => {
        const isFavorite = favorites.includes(itemId);
        if (isFavorite) {
            const updatedFavorites = favorites.filter((id) => id !== itemId);
            setFavorites(updatedFavorites);
        } else {
            const updatedFavorites = [...favorites, itemId];
            setFavorites(updatedFavorites);
        }
      }, [favorites]);

    const saveFavorites = async () => {
        try {
            await Preferences.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error('Error saving', error);
        }
    };

    const loadFavorites = async () => {
        try {
            const storedFavorites = await Preferences.getItem('favorites');
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    renderItem = ({ item }) => {
        return (
            <BookComponent
                authorName={item.authors[0]?.name || ''}
                bookName={item?.title || ''}
                publicationYear={item.first_publish_year || ''}
                onPress={() => {
                    ref.current.close()
                    props.navigation.navigate('DetailsScreen',{item:item})
                }}
                onPressfab={() => favourate(item?.key)}
                fab={favorites.includes(item?.key)}
                key={item?.key}
                removeWishList = {removeWishList}
            />
        )
    }
    const onChnageText = (text) => {
        setData(text)
        if(text != '') {
            const filteredData = book.filter(item =>
                item.title.toLowerCase().includes(text.toLowerCase())
              );
              setBook(filteredData);
        }  else {
            dispatch(fetchBookData())
        }
    }
    onPressClose = (isclose) => {
         if(isclose) {
            setRemoveWishList(!removeWishList)
            ref.current.close()
         }
      
    }

    const openWishList = () => {
        return (
            <ScreenGradient>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Scale(20), alignItems: 'center' }}>
                    <Text style={{ fontSize: Scale(30) }}>WishList</Text>
                    <Icon onPress={() => onPressClose('close')} style={{}} name={"cross"} size={50} color={'black'} />
                </View>
                <FlatList
                    data={book.filter((item) => favorites.includes(item.key))}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                    style={{ alignSelf: 'center' }}
                />
            </ScreenGradient>
        )
    }

    const openWishListData = (isopen) => {
        if(isopen) {
            ref.current.open()
            setRemoveWishList(!removeWishList)
        }
    }

    return (
       <ScreenGradient>
           <SafeAreaView style={styles.container}>
            {console.log("loading===",loading)}
            {
                !loading ? <> 
                    <HeaderCompoennt
                    onPressWishList={()=>openWishListData("isopen")}
               // onPressWishList={() => props.navigation.navigate('FavourateScreen', { wishlist: book.filter((item) => favorites.includes(item.key)) })}
            />
            <HeadingComponent />
            <SearchComponent
                onChangeText={onChnageText}
                value={data}
            />
    
            <FlatList
                data={book}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                style={{ alignSelf: 'center' }}
            />
                </> : (
                    <View style ={styles.loadinfContainer}>
                         <ActivityIndicator
                    size="large"
                    color={'gray'}
                    style={{ marginLeft: 6 }}
                  />
                    </View>
                )
            } 
             <BottomSheet
                refs={ref}
                height={Platform.OS === 'ios' ? Scale(800) : Scale(800)}
                openJSX={openWishList()}
                openDuration={250}
                //closeOnDragDown={true}
            />
        </SafeAreaView>
       </ScreenGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadinfContainer :{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default BookScreen
