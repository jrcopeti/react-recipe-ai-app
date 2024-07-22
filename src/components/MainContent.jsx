import React from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

function MainContent({ recipes, onGenerateRecipes, onSaveFavorite }) {
  return (
    <div>
      <RecipeForm onGenerateRecipes={onGenerateRecipes} />
      <RecipeList recipes={recipes} onSaveFavorite={onSaveFavorite} />
    </div>
  );
}

export default MainContent;
