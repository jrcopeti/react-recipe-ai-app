function RecipeCard({
  recipe,
  handleFavoriteRecipe,
  handleDiscardRecipe,
  isCreating,
  errorCreating,
  setErrorCreating,
  image,
}) {
  if (!recipe) return null;

  return (
    <div className="bg-transparent text-6xl font-normal text-cyan-950">
      <h2 className="mb-4 text-center text-4xl font-bold text-pallette-10">
        {recipe.title}
      </h2>

      <div className="flex flex-col lg:flex-row">
        <img
          src={image}
          alt={recipe.title}
          className="mb-2 h-96 rounded-md object-cover object-center lg:w-1/2"
        />
        <div className="flex-1 pl-4 text-lg">
          <p className="mb-4 text-2xl text-cyan-950">{recipe.description}</p>
          <p className="text-2xl">
            <strong>Preparation Time:</strong> {recipe.preparationTime}
          </p>
          <p className="text-2xl">
            <strong>Difficulty Level:</strong> {recipe.difficultyLevel}
          </p>
          <p className="text-2xl">
            <strong>Dietary Compliance:</strong> {recipe.dietaryOptions}
          </p>
          <h3 className="mb-2 mt-4 text-3xl font-semibold text-pallette-10">
            Ingredients:
          </h3>
          <ul className="mb-4 list-inside list-disc text-center text-2xl">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 text-lg">
        <h3 className="mb-2 text-3xl font-semibold">Instructions:</h3>
        <ol className="mb-4 list-inside text-left text-2xl">
          {recipe.instructions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="text-2xl">
          <strong>Serving Size:</strong> {recipe.servingSize}
        </p>
        <p className="text-2xl">
          <strong>Notes and Tips:</strong> {recipe.tips}
        </p>
      </div>

      {errorCreating ? (
        <div className="mt-3 flex w-full flex-col items-center rounded-lg border border-pallette-200 bg-pallette-400 p-6 text-4xl shadow-lg">
          <p>There was an error saving the recipe</p>
          <button
            className="w-48 rounded-lg border-2 border-pallette-50 bg-pallette-300 p-3 text-2xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
            onClick={() => setErrorCreating(null)}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="mt-3 flex w-full justify-center gap-4">
          <button
            className="w-48 rounded-lg border-2 border-pallette-50 bg-pallette-300 p-3 text-2xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
            onClick={() => handleFavoriteRecipe(recipe)}
            disabled={isCreating}
          >
            Save Recipe
          </button>
          <button
            className="w-48 rounded-lg border-2 border-pallette-50 bg-pallette-100 p-3 text-2xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
            onClick={() => handleDiscardRecipe()}
            disabled={isCreating}
          >
            Get Another Recipe
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
