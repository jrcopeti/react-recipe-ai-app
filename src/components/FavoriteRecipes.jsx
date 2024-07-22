import React from "react";

function FavoriteRecipeCard({ recipe }) {
  return (
    <div className="bg-pallette-300 rounded-lg border border-gray-900 p-6 shadow-lg">
      <h2 className="mb-2 text-3xl font-bold">{recipe.title}</h2>
      <p className="mb-4 text-cyan-950">{recipe.description}</p>
      <p>
        <strong>Preparation Time:</strong> {recipe.preparationTime}
      </p>
      <p>
        <strong>Difficulty Level:</strong> {recipe.difficultyLevel}
      </p>
      <p>
        <strong>Dietary Compliance:</strong> {recipe.dietaryCompliance}
      </p>
      <h3 className="mb-2 mt-4 font-semibold">Ingredients:</h3>
      <ul className="mb-4 list-inside list-disc">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 className="mb-2 mt-4 font-semibold">Instructions:</h3>
      <ol className="mb-4 list-inside list-decimal text-cyan-950">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Serving Size:</strong> {recipe.servingSize}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.scalingInstructions}
      </p>
      <p>
        <strong>Serving Suggestions:</strong> {recipe.servingSuggestions}
      </p>
      <p>
        <strong>Notes and Tips:</strong> {recipe.notesAndTips}
      </p>
    </div>
  );
}

export default FavoriteRecipeCard;
