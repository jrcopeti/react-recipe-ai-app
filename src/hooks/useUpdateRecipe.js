import { useEffect } from "react";
import { useState } from "react";
import { updateRecipe as updateRecipeApi } from "../services/apiRecipes";

function useUpdateRecipe(recipeId, recipeObj) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateRecipe = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await updateRecipeApi(recipeId, recipeObj);
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    updateRecipe();
  }, [recipeId, recipeObj]);

  return { recipe, isLoading, error };
}

export { useUpdateRecipe };
