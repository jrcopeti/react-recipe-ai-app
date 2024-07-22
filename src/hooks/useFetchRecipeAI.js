import { useEffect } from "react";
import { useState } from "react";
import { fetchResponseAI } from "../services/apiOpenAi";

function useFetchRecipeAI(prompt) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!prompt) return;

    const fetchRecipeAI = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchResponseAI(prompt);
        setRecipe(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipeAI();
  }, [prompt]);

  return { recipe, isLoading, error };
}

export { useFetchRecipeAI };
