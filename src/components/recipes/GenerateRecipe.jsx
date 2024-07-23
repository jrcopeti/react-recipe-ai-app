import { useState } from "react";
import FavoriteRecipes from "./FavoriteRecipeCard";
import RecipeForm from "./RecipeForm";
import { useFetchRecipeAi } from "../../hooks/useFetchRecipeAI";
import RecipeCard from "./RecipeCard";
import { useCreateRecipe } from "../../hooks/useCreateRecipe";

function GenerateRecipe() {
  const { recipe, isLoadingRecipeAi, errorAi, fetchRecipeAi } =
    useFetchRecipeAi();
  const { createRecipe } = useCreateRecipe();
  console.log(recipe);

  const ingredients = "broccoli, rice, soy sauce, garlic";
  const guests = 2;
  const dietaryOptions = "vegan";
  const cuisine = "Asian";
  const cookingMethod = "stir-frying";
  const flavorProfile = "spicy";

  const prompt = `Provide a detailed and relevant recipe suggestion that aligns with the following parameters:

Ingredients Available: The user has the following ingredients (max amount of 5): ${ingredients}. These ingredients are what they have on hand, so the recipes should primarily use these items. If additional ingredients are required, substitutions that are commonly available or flexible options.

Number of Guests: The meal should be suitable for ${guests} guest(s).

Dietary Options: The user has the following dietary options: ${dietaryOptions}. Please take these into account when suggesting recipes. For example, if the option is vegan, ensure that no animal products are included. If the restriction is gluten-free, avoid any ingredients containing gluten. Clearly state how each recipe complies with the dietary restrictions.

Type of Cuisine: The user prefers ${cuisine} cuisine (e.g., Italian, Asian). Tailor your suggestions to this preference if it has been specified.

Cooking Method: The user prefers ${cookingMethod} cooking method (e.g., grilling, baking). Tailor your suggestions to this preference if it has been specified.

Flavor Profile: The user prefers ${flavorProfile} flavor profile (e.g., spicy, sweet). Tailor your suggestions to this preference if it has been specified.`;

  const handleGenerateRecipe = (e) => {
    e.preventDefault();
    console.log("generate recipe");
    fetchRecipeAi(prompt);
  };

  const handleFavoriteRecipe = (recipe) => {
    console.log("recipe saved", recipe);
    createRecipe(recipe);
  };

  if (isLoadingRecipeAi)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (errorAi) return <p>Error: {errorAi.message}</p>;

  return (
    <>
      <div>
        <RecipeForm handleGenerateRecipe={handleGenerateRecipe} />
        <RecipeCard
          recipe={recipe}
          handleFavoriteRecipe={handleFavoriteRecipe}
        />
      </div>
    </>
  );
}

export default GenerateRecipe;
