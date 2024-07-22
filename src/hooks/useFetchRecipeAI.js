import { useState } from "react";
import { fetchResponseAI } from "../services/apiOpenAi";

function useFetchRecipeAI() {
  const [recipe, setRecipe] = useState(null);
  const [isLoadingRecipeAi, setIsLoadingRecipeAi] = useState(false);
  const [errorAi, setErrorAi] = useState(null);

  const fetchRecipeAi = async (prompt) => {
    setIsLoadingRecipeAi(true);
    setErrorAi(null);
    try {
      const data = await fetchResponseAI(prompt);
      setRecipe(data);
    } catch (error) {
      setErrorAi(error);
    } finally {
      setIsLoadingRecipeAi(false);
    }
  };

  return { recipe, isLoadingRecipeAi, errorAi, fetchRecipeAi };
}

export { useFetchRecipeAI };
