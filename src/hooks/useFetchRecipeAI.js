import { useState } from "react";
import { fetchResponseAi } from "../services/apiOpenAi";

function useFetchRecipeAi() {
  const [recipe, setRecipe] = useState(null);
  const [isLoadingRecipeAi, setIsLoadingRecipeAi] = useState(false);
  const [errorAi, setErrorAi] = useState(null);

  const fetchRecipeAi = async (prompt) => {
    setIsLoadingRecipeAi(true);
    setErrorAi(null);
    try {
      const data = await fetchResponseAi(prompt);
      setRecipe(data);
    } catch (error) {
      setErrorAi(error);
    } finally {
      setIsLoadingRecipeAi(false);
    }
  };

  return { recipe, isLoadingRecipeAi, errorAi, fetchRecipeAi, setRecipe };
}

export { useFetchRecipeAi };
