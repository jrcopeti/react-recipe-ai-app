import { useEffect, useState } from "react";
import { getRecipeById as getRecipeByIdApi } from "../services/apiRecipes";

function useGetRecipeById(recipeId) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorRecipeById, setErrorRecipeById] = useState(null);

  const getRecipeById = async () => {
    setErrorRecipeById(null);
    try {
      const data = await getRecipeByIdApi(recipeId);
      setRecipe(data);
    } catch (error) {
      console.log("Error in useGetRecipeById", error);
      setErrorRecipeById(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipeById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  return { recipe, isLoading, errorRecipeById, getRecipeById };
}

export { useGetRecipeById };
