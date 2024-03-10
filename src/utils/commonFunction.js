
 export const favourate = (itemId) => {
    let favorites = []
    const isFavorite = favorites.includes(itemId);
    if (isFavorite) {
      // Remove item from favorites
      const updatedFavorites = favorites.filter((id) => id !== itemId);
      saveFavorites(updatedFavorites)
    } else {
      // Add item to favorites
      const updatedFavorites = [...favorites, itemId];
      saveFavorites(updatedFavorites);
    }
}

export const saveFavorites = async (favorites) => {
            try {
              await Preferences.setItem('favorites', JSON.stringify(favorites));
            } catch (error) {
              console.error('Error saving favorites to AsyncStorage:', error);
            }
          };