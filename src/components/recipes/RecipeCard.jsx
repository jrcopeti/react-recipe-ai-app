function RecipeCard({
  recipe,
  handleFavoriteRecipe,
  handleDiscardRecipe,
  isCreating,
  errorCreating,
  setErrorCreating,
}) {
  if (!recipe) return;

  return (
    <div className="border-pallette-50 bg-pallette-400 text-pallette-500 rounded-lg border-2 p-6 font-normal shadow-xl">
      <h2 className="mb-2 text-3xl font-bold">{recipe.title}</h2>
      <p className="text-pallette-500 mb-4">{recipe.description}</p>
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
      <ol className="mb-4 list-inside">
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


      {errorCreating ? (
        <div className="flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
          <p>There was an error in saving the recipe.</p>
          <button onClick={() => setErrorCreating(null)}>Try Again</button>
        </div>
      ) : (
        <>
          <button
            className="btn btn-secondary mt-4 bg-pallette-100 text-black"
            onClick={() => handleFavoriteRecipe(recipe)}
            disabled={isCreating}
          >
            {isCreating ? (
              <span className="loading loading-ring loading-sm"></span>
            ) : (
              "Save Recipe"
            )}
          </button>
          <button
            className="btn btn-secondary mt-4 bg-pallette-100 text-black"
            onClick={() => handleDiscardRecipe()}
            disabled={isCreating}
          >
            Get Another Recipe
          </button>
        </>
      )}

      <button
        className="border-pallette-50 bg-pallette-300 text-pallette-500 hover:border-pallette-50 hover:text-pallette-500 btn btn-primary border-2 font-normal hover:bg-cyan-900"
        onClick={() => handleFavoriteRecipe(recipe)}
      >
        Save to Favorites
      </button>
      <button
        className="border-pallette-50 bg-pallette-100 text-pallette-500 hover:border-pallette-50 hover:text-pallette-500 btn btn-secondary border-2 font-normal hover:bg-cyan-900"
        onClick={() => handleDiscardRecipe()}
      >
        Get Another Recipe
      </button>

    </div>
  );
}

export default RecipeCard;
