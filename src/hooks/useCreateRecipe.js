import { useEffect } from "react";
import { useState } from "react";
import { createRecipe as createRecipeApi } from "../services/apiRecipes";

function useCreateRecipe() {
  const [recipeObj, setRecipeObj] = useState(null);
  const [newRecipe, setNewRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!recipeObj) return;
    const create = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await createRecipeApi(recipeObj);
        setNewRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    create();
  }, [recipeObj]);

  const createRecipe = (recipe) => {
    if (!recipe) return;
    setRecipeObj(recipe);
  };

  return { newRecipe, isLoading, error, createRecipe };
}

export { useCreateRecipe };
