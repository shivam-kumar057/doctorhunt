import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native'
import ApiBuilder from '../services/ApiBuilder'
import { apiGetMethod } from '../services/ApiConstant'
import HeaderCompoennt from '../compoennt/common/HeaderComponent'
import HeadingComponent from '../compoennt/common/HeadingCompoennt'
import SearchComponent from '../compoennt/common/SearchComponent'
import BookComponent from '../compoennt/BookComponent'
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookData } from '../redux/action/BookAction'
import { connect } from 'react-redux';
import Preferences from '../utils/LocalStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';



const BookScreen = (props) => {
    const select = useSelector((state) => state.BookReducer.list)
    const [book, setBook] = useState([])
    const [data, setData] = useState('')
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // props.fetchBookData()
        loadFavorites();
        bookscrees()
    }, [])

    useEffect(() => {
        saveFavorites();
    }, [favorites]);

    const bookscrees = () => {
        var requestOptions = {
            method: apiGetMethod,
            //headers: header,
        };
        ApiBuilder.getResponse(requestOptions).then((response) => {
            if (response) {
                setBook(response.works)
            }
        })
    }

    const debouncingConcept =
        useCallback(
            debounce(textParam => {
                console.log("textparams===", textParam)
                filteredData(textParam)
            }, 500),
            [],
        )

    const filteredData = (text) => {
        if (text !== '') {
            // setSearchText(text)
            let filteredData = book.filter((item) => {
                return item.title.toLowerCase().includes(text);
            })
            setBook(filteredData)
            console.log("filteredData===", filteredData)
        } else (
            bookscrees()
        )
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
                onPress={() => console.log("press")}
                onPressfab={() => favourate(item?.key)}
                fab={favorites.includes(item?.key)}
                key={item?.key}
            />
        )
    }
    const onChnageText = (text) => {
        setData(text)
        debouncingConcept(text)
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderCompoennt
                onPressWishList={() => props.navigation.navigate('FavourateScreen', { wishlist: book.filter((item) => favorites.includes(item.key)) })}
            />
            <HeadingComponent />
            <SearchComponent
                onChangeText={onChnageText}
                value={data}
            />
            {/* { console.log("book========",book)} */}
            <FlatList
                data={book}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                style={{ alignSelf: 'center' }}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const mapStateToProps = (state) => ({
    data: state.BookReducer.list,
});


export default connect(mapStateToProps, { fetchBookData })(BookScreen);