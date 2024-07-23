import { Link } from "react-router-dom";
import { useGetAllRecipes } from "../../hooks/useGetAllRecipes";
import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";

function FavoriteRecipesList() {
  const { recipes: favoriteRecipes, getAllRecipes } = useGetAllRecipes();
  console.log("favoriteRecipes", favoriteRecipes);

  const { deleteRecipe } = useDeleteRecipe(getAllRecipes);

  const handleDeleteRecipe = (id) => {
    console.log("Recipe deleted in Favorite recipes list", id);
    deleteRecipe(id);
  };
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
            <Link to={`/recipes/${recipe.id}`}>
              <button className="border-pallette-600 hover:border-pallette-600 btn btn-primary bg-pallette-300 font-normal text-pallette-500 hover:bg-cyan-900 hover:text-pallette-500">
                View Recipe
              </button>
            </Link>

            <button
              className="border-pallette-600 hover:border-pallette-600 btn btn-secondary bg-pallette-400 font-normal text-pallette-500 hover:bg-cyan-900 hover:text-pallette-500"
              onClick={() => handleDeleteRecipe(recipe.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipesList;
