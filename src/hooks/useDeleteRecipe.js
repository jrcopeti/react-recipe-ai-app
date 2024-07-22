import { useEffect } from "react";
import { useState } from "react";
import { deleteRecipe as deleteRecipeApi } from "../services/apiRecipes";

function useDeleteRecipe(recipeId) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteRecipe = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await deleteRecipeApi(recipeId);
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    deleteRecipe();
  }, [recipeId]);

  return { recipe, isLoading, error };
}

export { useDeleteRecipe };
