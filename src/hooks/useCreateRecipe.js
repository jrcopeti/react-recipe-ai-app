import { useState } from "react";
import { createRecipe as createRecipeApi } from "../services/apiRecipes";

function useCreateRecipe() {
  const [newRecipe, setNewRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createRecipe = async (recipe) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await createRecipeApi(recipe);
      setNewRecipe(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { newRecipe, isLoading, error, createRecipe };
}

export { useCreateRecipe };
