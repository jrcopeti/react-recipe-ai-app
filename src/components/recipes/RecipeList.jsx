import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onSaveFavorite }) {
  return (
    <div className="space-y-6">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          onSaveFavorite={onSaveFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeList;
