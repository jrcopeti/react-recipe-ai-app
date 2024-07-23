import { useNavigate, useParams } from "react-router-dom";
import { useGetRecipeById } from "../../hooks/useGetRecipeById";
import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";

function FavoriteRecipeCard() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { deleteRecipe } = useDeleteRecipe();

  const handleDeleteRecipe = (id) => {
    console.log("Recipe deleted in Favorite recipes list", id);
    deleteRecipe(id);
    navigate("/recipes");
  };

  const { recipe: favoriteRecipe } = useGetRecipeById(recipeId);
  console.log(" favorite recipe in favorite recipe card", favoriteRecipe);
  if (!favoriteRecipe) return;
  return (
    <div className="border-pallette-200 bg-pallette-400 rounded-lg border p-6 shadow-lg">
      <h2 className="mb-2 text-3xl font-bold">{favoriteRecipe.title}</h2>
      <p className="mb-4 text-cyan-950">{favoriteRecipe.description}</p>
      <p>
        <strong>Preparation Time:</strong> {favoriteRecipe.preparationTime}
      </p>
      <p>
        <strong>Difficulty Level:</strong> {favoriteRecipe.difficultyLevel}
      </p>
      <p>
        <strong>Dietary Compliance:</strong> {favoriteRecipe.dietaryOptions}
      </p>
      <h3 className="mb-2 mt-4 font-semibold">Ingredients:</h3>
      <ul className="mb-4 list-inside list-disc">
        {favoriteRecipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 className="mb-2 mt-4 font-semibold">Instructions:</h3>
      <ol className="mb-4 list-inside list-decimal">
        {favoriteRecipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Serving Size:</strong> {favoriteRecipe.servingSize}
      </p>
      <p>
        <strong>Notes and Tips:</strong> {favoriteRecipe.tips}
      </p>
      <button
        className="btn btn-secondary"
        onClick={() => handleDeleteRecipe(favoriteRecipe.id)}
      >
        Remove from Favorites
      </button>
    </div>
  );
}

export default FavoriteRecipeCard;
