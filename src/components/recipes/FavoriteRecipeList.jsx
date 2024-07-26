// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Hooks
import { useGetAllRecipes } from "../../hooks/useGetAllRecipes";
import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";

function FavoriteRecipesList() {
  // deleted recipe ids state
  const [deletedRecipeIds, setDeletedRecipeIds] = useState([]);
  const [errorDeleteRecipeIds, setErrorDeleteRecipeIds] = useState([]);

  // get all recipes
  const {
    recipes: favoriteRecipes,
    getAllRecipes,
    isLoading,
  } = useGetAllRecipes();

  // delete recipe
  const { deleteRecipe, isLoading: isDeleting } =
    useDeleteRecipe(getAllRecipes);

  useEffect(() => {
    let timer;
    if (deletedRecipeIds && deletedRecipeIds.length > 0) {
      timer = setTimeout(() => {
        setDeletedRecipeIds([]);
      }, 3000);
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
      <div className="mt-3 flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
        <p>No recipes to display</p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-6xl font-bold text-cyan-950">
        Favorite Recipes
      </h2>
      <div className="space-y-6">
        {favoriteRecipes.map((recipe) => (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={recipe.id}
          >
            <h3 className="text-3xl font-bold">{recipe.title} </h3>
            <p>{recipe.description}</p>

            {deletedRecipeIds.includes(recipe.id) && (
              <div className="toast">
                <div className="flex w-fit transform flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg transition-transform duration-100 ease-in-out md:right-[110px]">
                  <p>Recipe removed from the list.</p>
                </div>
              </div>
            )}

            {errorDeleteRecipeIds.includes(recipe.id) ? (
              <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 text-center shadow-lg">
                <p>There was an error in deleting the recipe. </p>
                <button
                  className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
                <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 text-center shadow-lg">
                  <p>Recipe deleted successfully!</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to={`/recipes/${recipe.id}`}>
                  <button
                    disabled={isDeleting}
                    className="btn btn-secondary border-2 border-pallette-50 bg-pallette-400 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
                  >
                    View Recipe
                  </button>
                </Link>

                <button
                  className="space btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
                  onClick={() => handleDeleteRecipe(recipe.id)}
                  disabled={isDeleting}
                >
                  Remove from Favorites
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
