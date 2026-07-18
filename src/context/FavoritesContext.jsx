import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    setFavorites((currentFavorites) => [
      ...currentFavorites,
      recipe,
    ]);
  };

  const removeFavorite = (recipeId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((recipe) => recipe.id !== recipeId)
    );
  };

  const isFavorite = (recipeId) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}