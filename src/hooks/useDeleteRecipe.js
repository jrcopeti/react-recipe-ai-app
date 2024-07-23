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
      refetchRecipes();
    } catch (error) {
      setErrorDeleting(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, errorDeleting, deleteRecipe };
}

export { useDeleteRecipe };
