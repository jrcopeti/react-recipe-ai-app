import { Link } from "react-router-dom";
import { useGetAllRecipes } from "../../hooks/useGetAllRecipes";
import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";
import { useEffect, useState } from "react";

function FavoriteRecipesList() {
  const [deletedRecipeIds, setDeletedRecipeIds] = useState([]);
  const [errorDeleteRecipeIds, setErrorDeleteRecipeIds] = useState([]);
  const {
    recipes: favoriteRecipes,
    getAllRecipes,
    isLoading,
  } = useGetAllRecipes();
  console.log("favoriteRecipes", favoriteRecipes);

  const {
    deleteRecipe,
    isLoading: isDeleting,
    errorDeleting,
  } = useDeleteRecipe(getAllRecipes);

  console.log("deletedRecipeIds", deletedRecipeIds);

  useEffect(() => {
    let timer;
    if (deletedRecipeIds && deletedRecipeIds.length > 0) {
      timer = setTimeout(() => {
        setDeletedRecipeIds([]);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [deletedRecipeIds]);

  const handleDeleteRecipe = async (id) => {
    console.log("Recipe deleted in Favorite recipes list", id);
    try {
      await deleteRecipe(id);
      setDeletedRecipeIds((prev) => [...prev, id]);
      setErrorDeleteRecipeIds((prev) =>
        prev.filter((recipeId) => recipeId !== id),
      );
    } catch (error) {
      console.error("Error saving recipe", error);
      setErrorDeleteRecipeIds((prev) => [...prev, id]);
    }
  };

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  if (!isLoading && (!favoriteRecipes || favoriteRecipes.length === 0)) {
    return (
      <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
        <p>No recipes to display</p>
      </div>
    );
  }

  return (
    <section className="mt-8 flex flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold text-cyan-950">
        Favorite Recipes
      </h2>
      <div className="space-y-6">
        {favoriteRecipes.map((recipe) => (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={recipe.id}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            {deletedRecipeIds.includes(recipe.id) && (
              <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 text-center shadow-lg">
                <p>Recipe deleted successfully!</p>
              </div>
            )}

            {errorDeleteRecipeIds.includes(recipe.id) ? (
              <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 text-center shadow-lg">
                <p>There was an error in deleting the recipe. </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
                <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 text-center shadow-lg">
                  <p>Recipe deleted successfully!</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to={`/recipes/${recipe.id}`}>
                  <button disabled={isDeleting} className="btn btn-primary">
                    View Recipe
                  </button>
                </Link>

                <button
                  className="btn btn-secondary"
                  onClick={() => handleDeleteRecipe(recipe.id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <span className="loading loading-ring loading-sm"></span>
                  ) : (
                    "Remove from Favorites"
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipesList;
