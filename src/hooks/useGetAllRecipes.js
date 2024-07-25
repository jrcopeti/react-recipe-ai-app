import { useEffect } from "react";
import { useState } from "react";
import { getAllRecipesApi } from "../services/apiRecipes";

function useGetAllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllRecipes = async () => {
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

  useEffect(() => {
    getAllRecipes();
  }, []);

  return { recipes, isLoading, error, getAllRecipes };
}

export { useGetAllRecipes };
