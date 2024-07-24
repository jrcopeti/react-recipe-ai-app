import { useState } from "react";
import { createRecipe as createRecipeApi } from "../services/apiRecipes";

function useCreateRecipe() {
  const [newRecipe, setNewRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCreating, setErrorCreating] = useState(null);

  const createRecipe = async (recipe) => {
    setIsLoading(true);
    setErrorCreating(null);
    try {
      const data = await createRecipeApi(recipe);
      setNewRecipe(data);
    } catch (error) {
      setErrorCreating(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    newRecipe,
    isLoading,
    errorCreating,
    createRecipe,
    setErrorCreating,
  };
}

export { useCreateRecipe };
