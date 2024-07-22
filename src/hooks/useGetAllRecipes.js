import { useEffect } from "react";
import { useState } from "react";
import { getAllRecipes as getAllRecipesApi } from "../services/apiRecipes";

function useGetAllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllRecipes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getAllRecipesApi();
        setRecipes(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllRecipes();
  }, []);

  return { recipes, isLoading, error };
}

export { useGetAllRecipes };
