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
    error,
  } = useGetAllRecipes();

  // delete recipe
  const {
    deleteRecipe,
    isLoading: isDeleting,
    isRemoving,
  } = useDeleteRecipe(getAllRecipes);

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

  if (!favoriteRecipes && !isLoading) {
    return (
      <div className="mt-3 flex w-fit flex-col items-center justify-center rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-pallette-500 shadow-lg">
        <p>There was an error in getting recipes</p>
        <button
          className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  if (favoriteRecipes.length === 0 && !isLoading) {
    return (
      <div className="mt-3 flex w-fit flex-col items-center justify-center rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-pallette-500 shadow-lg">
        <p>No recipes to display. Start by saving a recipe.</p>
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div className="mt-3 flex w-fit flex-col items-center justify-center rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-pallette-500 shadow-lg">
        <p>There was an error in loading the recipes</p>
        <button
          className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-6xl font-bold text-pallette-10">
        Favorite Recipes
      </h2>
      <div className="space-y-6">
        {favoriteRecipes &&
          favoriteRecipes.map((recipe) => (
            <div
              className="flex max-w-3xl flex-col items-center justify-center gap-2"
              key={recipe.id}
            >
              <h3 className="text-3xl font-bold">{recipe.title} </h3>
              <p className="">{recipe.description}</p>

              {deletedRecipeIds.includes(recipe.id) && (
                <div className="toast">
                  <div className="flex w-fit transform flex-col rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-pallette-500 shadow-lg transition-transform duration-100 ease-in-out md:right-[110px]">
                    <p>Recipe removed from the list</p>
                  </div>
                </div>
              )}

              {errorDeleteRecipeIds.includes(recipe.id) ? (
                <div className="w-fit rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-center text-pallette-500 shadow-lg">
                  <p>There was an error in deleting the recipe. </p>
                  <button
                    className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
                    onClick={() => window.location.reload()}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to={`/recipes/${recipe.id}`}>
                    <button
                      disabled={isDeleting || isRemoving}
                      className="btn btn-secondary border-2 border-pallette-50 bg-pallette-400 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
                    >
                      View Recipe
                    </button>
                  </Link>

                  <button
                    className="space btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
                    onClick={() => handleDeleteRecipe(recipe.id)}
                    disabled={isDeleting || isRemoving}
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
