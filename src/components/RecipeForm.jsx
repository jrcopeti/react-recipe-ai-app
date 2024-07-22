import React, { useState } from "react";
function RecipeForm({ onGenerateRecipes }) {
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipes = [
      {
        title: "Example Recipe",
        description: "A quick and easy example recipe.",
        preparationTime: "20 minutes",
        difficultyLevel: "Easy",
        dietaryCompliance: "Vegan",
        ingredients: ["Ingredient 1", "Ingredient 2"],
        instructions: ["Step 1", "Step 2"],
        servingSize: "2 servings",
        scalingInstructions: "Multiply by number of servings.",
        servingSuggestions: "Serve with a side salad.",
        notesAndTips: "Add a pinch of salt for extra flavor.",
      },
    ];
    onGenerateRecipes(newRecipes);
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="mb-2 block">Ingredients (comma-separated):</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          placeholder="e.g., chicken, rice, broccoli"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Preparation Time:</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          placeholder="e.g., 30 minutes"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Number of Guests:</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          placeholder="e.g., 4"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Dietary Restrictions:</label>
        <input
          type="text"
          value={restrictions}
          onChange={(e) => setRestrictions(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          placeholder="e.g., vegan, gluten-free"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Difficulty Level:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Generate Recipes
      </button>
    </form>
  );
}

export default RecipeForm;
