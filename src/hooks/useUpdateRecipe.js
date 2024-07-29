import { useState } from "react";
import { updateRecipe as updateRecipeApi } from "../services/apiRecipes";

function useUpdateRecipe(refetchRecipe) {
  const [updatedRecipe, setUpdatedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorUpdate, setErrorUpdate] = useState(null);

  const updateRecipe = async (id, recipe) => {
    setIsLoading(true);
    setErrorUpdate(null);
    try {
      const data = await updateRecipeApi(id, recipe);
      setUpdatedRecipe(data);
      if (refetchRecipe) await refetchRecipe();
    } catch (error) {
      setErrorUpdate(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { updatedRecipe, isLoading, errorUpdate, updateRecipe };
}

export { useUpdateRecipe };
