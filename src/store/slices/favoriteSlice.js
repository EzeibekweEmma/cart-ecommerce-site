const favoriteSlice = (set, get) => ({
    favorites: [],

    // addToFavorites function handles adding and removing items from favorites.
    addToFavorites: (item) => {
        // Finding the index of the item in the existing favorites list.
        const existingItemIndex = get().favorites.findIndex(
            (favorite) => favorite._id === item._id
        );
        // If the item is already in favorites, remove it
        if (existingItemIndex !== -1) {
            const updatedFavorites = [...get().favorites];
            // Remove the item at the found index.
            updatedFavorites.splice(existingItemIndex, 1);

            set({
                // Updating the state with the updated favorites array.
                favorites: updatedFavorites,
            });
        } else {
            // If the item is not in favorites, add it.
            set({
                favorites: [...get().favorites, item],
            });
        }
    },
    // addToFavorites only function handles adding items to favorites.
    onlyAddToFavorites: (item) => {
        // Finding the index of the item in the existing favorites list.
        const existingItemIndex = get().favorites.findIndex(
            (favorite) => favorite._id === item._id
        );
        if (existingItemIndex !== -1) {
            // If the item is already in favorites, Do Nothing
        } else {
            // If the item is not in favorites, add it.
            set({
                favorites: [...get().favorites, item],
            });
        }
    },
});

export default favoriteSlice;
