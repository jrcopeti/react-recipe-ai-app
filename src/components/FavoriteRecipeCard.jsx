import React from "react";
import FavoriteRecipeCard from "./FavoriteRecipeCard";

function FavoriteRecipes({ favoriteRecipes }) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-cyan-950">
        Favorite Recipes
      </h2>
      <div className="space-y-6">
        {favoriteRecipes.map((recipe, index) => (
          <FavoriteRecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipes;
