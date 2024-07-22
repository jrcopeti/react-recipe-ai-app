import { useEffect } from "react";
import { useState } from "react";
import { fetchResponseAI } from "../services/apiOpenAi";

export function useRecipe(prompt) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!prompt) return;
    fetchResponseAI({ setIsLoading, setError, setRecipe, prompt });
  }, [prompt]);

  return { recipe, isLoading, error };
}
