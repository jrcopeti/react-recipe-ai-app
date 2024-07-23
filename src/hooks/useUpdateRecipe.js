import { useState } from "react";
import { updateRecipe as updateRecipeApi } from "../services/apiRecipes";

function useUpdateRecipe() {
  const [updatedRecipe, setUpdatedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRecipe = async (id, recipe) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await updateRecipeApi(id, recipe);
      setUpdatedRecipe(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { updatedRecipe, isLoading, error, updateRecipe };
}

export { useUpdateRecipe };
