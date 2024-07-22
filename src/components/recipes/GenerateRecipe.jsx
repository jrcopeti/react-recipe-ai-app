import { useState } from "react";
import FavoriteRecipes from "./FavoriteRecipes";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

function GenerateRecipe() {
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
      <div>
        <RecipeForm onGenerateRecipes={handleGenerateRecipes} />
        <RecipeList recipes={recipes} onSaveFavorite={handleSaveFavorite} />
      </div>
      {/* <FavoriteRecipes favoriteRecipes={favoriteRecipes} /> */}
    </>
  );
}

export default GenerateRecipe;
