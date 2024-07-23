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
              <button className="btn btn-primary">View Recipe</button>
            </Link>

            <button
              className="btn btn-secondary"
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
