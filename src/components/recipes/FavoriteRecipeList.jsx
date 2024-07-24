import { Link } from "react-router-dom";
import { useGetAllRecipes } from "../../hooks/useGetAllRecipes";
import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";

function FavoriteRecipesList() {
  const { recipes: favoriteRecipes, getAllRecipes } = useGetAllRecipes();
  console.log("favoriteRecipes", favoriteRecipes);

  const {
    deleteRecipe,
    isLoading: isDeleting,
    errorDeleting,
  } = useDeleteRecipe(getAllRecipes);

  const handleDeleteRecipe = (id) => {
    console.log("Recipe deleted in Favorite recipes list", id);
    deleteRecipe(id);
  };

  if (!favoriteRecipes || favoriteRecipes.length === 0) {
    return (
      <div className="flex w-fit items-center justify-center rounded-lg p-6 text-4xl">
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
          <div key={recipe.id} S>
            <h3 className="text-3xl font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>

            {errorDeleting ? (
              <div className="flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
                <p>There was an error in deleting the recipe. </p>
                <button
                  className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <Link to={`/recipes/${recipe.id}`}>
                  <button
                    disabled={isDeleting}
                    className="space btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
                  >
                    View Recipe
                  </button>
                </Link>

                <button
                  className="btn btn-secondary border-2 border-pallette-50 bg-pallette-400 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
                  onClick={() => handleDeleteRecipe(recipe.id)}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <span className="loading loading-ring loading-sm"></span>
                  ) : (
                    "Remove from Favorites"
                  )}
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipesList;
