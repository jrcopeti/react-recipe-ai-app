import { useState } from "react";
import { deleteRecipe as deleteRecipeApi } from "../services/apiRecipes";

function useDeleteRecipe(refetchRecipes) {
  const [isLoadingDeleting, setIsLoadingDeleting] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(null);

  const deleteRecipe = async (recipe) => {
    setIsLoadingDeleting(true);
    setErrorDeleting(null);
    try {
      await deleteRecipeApi(recipe);
      refetchRecipes();
    } catch (error) {
      setErrorDeleting(error);
    } finally {
      setIsLoadingDeleting(false);
    }
  };

  return { isLoadingDeleting, errorDeleting, deleteRecipe };
}

export { useDeleteRecipe };
