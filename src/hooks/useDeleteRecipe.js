import { useState } from "react";
import { deleteRecipe as deleteRecipeApi } from "../services/apiRecipes";

function useDeleteRecipe() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteRecipe = async (recipe) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteRecipeApi(recipe);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, deleteRecipe };
}

export { useDeleteRecipe };
