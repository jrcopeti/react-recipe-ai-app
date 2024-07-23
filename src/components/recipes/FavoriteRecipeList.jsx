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
      <div className="w-fit rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
        <p>No recipes to display</p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-cyan-950">
        Favorite Recipes
      </h2>
      <div className="space-y-6">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            {errorDeleting ? (
              <div className="flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
                <p>There was an error in deleting the recipe. </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipesList;
