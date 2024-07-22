import { useState } from "react";
import { createRecipe as createRecipeApi } from "../services/apiRecipes";

function useCreateRecipe() {
  const [newRecipe, setNewRecipe] = useState(null);
  const [isLoadingCreating, setIsLoadingCreating] = useState(false);
  const [errorCreating, setErrorCreating] = useState(null);

  const createRecipe = async (recipe) => {
    setIsLoadingCreating(true);
    setErrorCreating(null);
    try {
      const data = await createRecipeApi(recipe);
      setNewRecipe(data);
    } catch (error) {
      setErrorCreating(errorCreating);
    } finally {
      setIsLoadingCreating(false);
    }
  };

  return {
    newRecipe,
    isLoadingCreating,
    errorCreating,
    createRecipe,
  };
}

export { useCreateRecipe };
