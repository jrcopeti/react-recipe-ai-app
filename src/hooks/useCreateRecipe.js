import { useEffect } from "react";
import { useState } from "react";
import { createRecipe as createRecipeApi } from "../services/apiRecipes";

function useCreateRecipe(recipeObj) {
  const [newRecipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const createRecipe = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await createRecipeApi(recipeObj);
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    createRecipe();
  }, [recipeObj]);

  return { newRecipe, isLoading, error };
}

export { useCreateRecipe };
