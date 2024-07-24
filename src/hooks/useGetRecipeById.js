import { useEffect } from "react";
import { useState } from "react";
import { getRecipeById as getRecipeByIdApi } from "../services/apiRecipes";

function useGetRecipeById(recipeId) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorRecipeById, setErrorRecipeById] = useState(null);

  const getRecipeById = async () => {
    setIsLoading(true);
    setErrorRecipeById(null);
    try {
      const data = await getRecipeByIdApi(recipeId);
      setRecipe(data);
    } catch (error) {
      setErrorRecipeById(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipeById();
  }, [recipeId]);

  return { recipe, isLoading, errorRecipeById, getRecipeById };
}

export { useGetRecipeById };
