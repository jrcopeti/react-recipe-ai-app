function RecipeCard({ recipe, handleFavoriteRecipe, handleDiscardRecipe }) {
  if (!recipe) return;
  return (
    <div className="rounded-lg border-2 border-pallette-50 bg-pallette-400 p-6 font-normal text-pallette-500 shadow-xl">
      <h2 className="mb-2 text-3xl font-bold">{recipe.title}</h2>
      <p className="mb-4 text-pallette-500">{recipe.description}</p>
      <p>
        <strong>Preparation Time:</strong> {recipe.preparationTime}
      </p>
      <p>
        <strong>Difficulty Level:</strong> {recipe.difficultyLevel}
      </p>
      <p>
        <strong>Dietary Compliance:</strong> {recipe.dietaryOptions}
      </p>
      <h3 className="mb-2 mt-4 font-semibold">Ingredients:</h3>
      <ul className="mb-4 list-inside list-disc">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 className="mb-2 mt-4 font-semibold">Instructions:</h3>
      <ol className="mb-4 list-inside list-decimal">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Serving Size:</strong> {recipe.servingSize}
      </p>
      <p>
        <strong>Notes and Tips:</strong> {recipe.tips}
      </p>
      <button
        className="border-pallette-600 hover:border-pallette-600 btn btn-secondary mt-4 bg-cyan-900 font-normal text-pallette-500 hover:bg-cyan-950"
        onClick={() => handleFavoriteRecipe(recipe)}
      >
        Save to Favorites
      </button>
      <button
        className="btn btn-secondary mt-4 bg-pallette-100 text-black"
        onClick={() => handleDiscardRecipe()}
      >
        Get Another Recipe
      </button>
    </div>
  );
}

export default RecipeCard;
