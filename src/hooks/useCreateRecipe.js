import { useState } from "react";
import { createRecipe as createRecipeApi } from "../services/apiRecipes";

function useCreateRecipe() {
  const [newRecipe, setNewRecipe] = useState(null);
  const [isLoadingCreatingRecipe, setIsLoadingCreatingRecipe] = useState(false);
  const [errorCreatingRecipe, setErrorCreatingRecipe] = useState(null);

  const createRecipe = async (recipe) => {
    setIsLoadingCreatingRecipe(true);
    setErrorCreatingRecipe(null);
    try {
      const data = await createRecipeApi(recipe);
      setNewRecipe(data);
    } catch (error) {
      setErrorCreatingRecipe(errorCreatingRecipe);
    } finally {
      setIsLoadingCreatingRecipe(false);
    }
  };

  return {
    newRecipe,
    isLoadingCreatingRecipe,
    errorCreatingRecipe,
    createRecipe,
  };
}

export { useCreateRecipe };
