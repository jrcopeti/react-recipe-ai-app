import { useState } from "react";
import MainContent from "../MainContent";
import FavoriteRecipes from "../FavoriteRecipes";

function RecipesIndex() {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleGenerateRecipes = (newRecipes) => {
    setRecipes(newRecipes);
  };

  const handleSaveFavorite = (recipe) => {
    setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipe]);
  };
  return (
    <>
      <MainContent
        recipes={recipes}
        onGenerateRecipes={handleGenerateRecipes}
        onSaveFavorite={handleSaveFavorite}
      />
      <FavoriteRecipes favoriteRecipes={favoriteRecipes} />
    </>
  );
}

export default RecipesIndex;
