import { Link } from "react-router-dom";
import { useGetAllRecipes } from "../../hooks/useGetAllRecipes";
import FavoriteRecipeCard from "./FavoriteRecipeCard";

function FavoriteRecipesList({ handleDeleteRecipe }) {
  const { recipes: favoriteRecipes } = useGetAllRecipes();
  console.log("favoriteRecipes", favoriteRecipes);
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipesList;
