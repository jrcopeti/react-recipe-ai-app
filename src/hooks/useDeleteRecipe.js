import { useState } from "react";
import { deleteRecipe as deleteRecipeApi } from "../services/apiRecipes";

function useDeleteRecipe(refetchRecipes) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(null);
  const [isRemoving, setIsRemoving] = useState(false);

  const deleteRecipe = async (recipe) => {
    setIsLoading(true);
    setIsRemoving(true);
    setErrorDeleting(null);
    try {
      await deleteRecipeApi(recipe);
      setTimeout(() => {
        if (refetchRecipes) refetchRecipes();
        setIsRemoving(false);
      }, 3000);
    } catch (error) {
      setErrorDeleting(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, errorDeleting, deleteRecipe, isRemoving };
}

export { useDeleteRecipe };
