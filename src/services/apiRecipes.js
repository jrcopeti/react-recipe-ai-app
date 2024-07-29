import axios from "axios";

const apiURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL_PRODUCTION
    : import.meta.env.VITE_API_URL_DEVELOPMENT;

const getAllRecipesApi = async () => {
  try {
    const response = await axios.get(`${apiURL}/recipes`);
    const { data } = response;
    return data || [];
  } catch (error) {
    console.error("Error fetching recipes", error);
    throw error;
  }
};

const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${apiURL}/recipes/${recipeId}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching recipe", error);
    throw error;
  }
};

const createRecipe = async (newRecipe) => {
  try {
    const response = await axios.post(`${apiURL}/recipes`, newRecipe);
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error creating recipe", error);
    throw error;
  }
};

const updateRecipe = async (recipeId, newRecipe) => {
  try {
    await axios.put(`${apiURL}/recipes/${recipeId}`, newRecipe);
  } catch (error) {
    console.error("Error updating recipe", error);
    throw error;
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    const deleted = await axios.delete(`${apiURL}/recipes/${recipeId}`);
    return deleted;
  } catch (error) {
    console.error("Error deleting recipe", error);
    throw error;
  }
};

export {
  getAllRecipesApi,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
