import { useState } from "react";
import { deleteRecipe as deleteRecipeApi } from "../services/apiRecipes";

function useDeleteRecipe(refetchRecipes) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(null);

  const deleteRecipe = async (recipe) => {
    setIsLoading(true);
    setErrorDeleting(null);
    try {
      await deleteRecipeApi(recipe);
      setTimeout(() => {
        if (refetchRecipes) refetchRecipes();
      }, 3000);
    } catch (error) {
      setErrorDeleting(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, errorDeleting, deleteRecipe };
}

export { useDeleteRecipe };
