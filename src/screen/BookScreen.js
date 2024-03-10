import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import ApiBuilder from '../services/ApiBuilder'
import { apiGetMethod } from '../services/ApiConstant'
import HeaderCompoennt from '../compoennt/common/HeaderComponent'
import HeadingComponent from '../compoennt/common/HeadingCompoennt'
import SearchComponent from '../compoennt/common/SearchComponent'
import BookComponent from '../compoennt/BookComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookData } from '../redux/action/BookAction'
import { connect } from 'react-redux';
import Preferences from '../utils/LocalStorage'



const BookScreen = (props) => {
    const select = useSelector((state) => state.BookReducer.list)
    const [book, setBook] = useState([])
    const [data, setData] = useState('')
    const [favorites, setFavorites] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        loadFavorites();
        bookscrees()
    }, [])

    useEffect(() => {
        saveFavorites();

    }, [favorites]);

    const bookscrees = () => {
        var requestOptions = {
            method: apiGetMethod,
        };
        ApiBuilder.getResponse(requestOptions).then((response) => {
            console.log("response ===",response)
            if (response) {
                setLoading(false)
                setBook(response.works)
            }
        })
    }

    const favourate = (itemId) => {
        const isFavorite = favorites.includes(itemId);
        if (isFavorite) {
            const updatedFavorites = favorites.filter((id) => id !== itemId);
            setFavorites(updatedFavorites);
        } else {
            const updatedFavorites = [...favorites, itemId];
            setFavorites(updatedFavorites);
        }
    }

    const saveFavorites = async () => {
        try {
            await Preferences.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error('Error saving favorites to AsyncStorage:', error);
        }
    };

    const loadFavorites = async () => {
        try {
            const storedFavorites = await Preferences.getItem('favorites');
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error('Error loading favorites from AsyncStorage:', error);
        }
    };

    renderItem = ({ item, index }) => {
        return (
            <BookComponent
                authorName={item.authors[0]?.name || ''}
                bookName={item?.title || ''}
                publicationYear={item.first_publish_year || ''}
                onPress={() => props.navigation.navigate('DetailsScreen',{item:item})}
                onPressfab={() => favourate(item?.key)}
                fab={favorites.includes(item?.key)}
                key={item?.key}
            />
        )
    }
    const onChnageText = (text) => {
        setData(text)
        if(text != '') {
            const filteredData = book.filter(item =>
                item.title.toLowerCase().includes(data.toLowerCase())
              );
              setBook(filteredData);
        }  else {
            bookscrees()
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            {
                !loading ? <>
                    <HeaderCompoennt
                onPressWishList={() => props.navigation.navigate('FavourateScreen', { wishlist: book.filter((item) => favorites.includes(item.key)) })}
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
        </SafeAreaView>
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

const mapStateToProps = (state) => ({
    data: state.BookReducer.list,
});


export default connect(mapStateToProps, { fetchBookData })(BookScreen);