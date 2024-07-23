import axios from "axios";

const apiURL = "http://localhost:5005";

const getAllRecipesApi = async () => {
  try {
    const response = await axios.get(`${apiURL}/recipes`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching recipes", error);
    return [];
  }
};

const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${apiURL}/recipes/${recipeId}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching recipe", error);
    return null;
  }
};

const createRecipe = async (newRecipe) => {
  try {
    const response = await axios.post(`${apiURL}/recipes`, newRecipe);
    const { data } = response;
    console.log("Recipe created", data);
    return data;
  } catch (error) {
    console.error("Error creating recipe", error);
    return null;
  }
};

const updateRecipe = async (recipeId, newRecipe) => {
  try {
    await axios.put(`${apiURL}/recipes/${recipeId}`, newRecipe);
    console.log("Recipe updated", newRecipe);
  } catch (error) {
    console.error("Error updating recipe", error);
    return null;
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    await axios.delete(`${apiURL}/recipes/${recipeId}`);
    console.log("Recipe deleted", recipeId);
  } catch (error) {
    console.error("Error deleting recipe", error);
    return null;
  }
};

export {
  getAllRecipesApi,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
