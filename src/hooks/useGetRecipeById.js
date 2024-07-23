import { useEffect } from "react";
import { useState } from "react";
import { getRecipeById as getRecipeByIdApi } from "../services/apiRecipes";

function useGetRecipeById(recipeId) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipeById = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getRecipeByIdApi(recipeId);
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRecipeById();
  }, [recipeId]);

  return { recipe, isLoading, error };
}

export { useGetRecipeById };
