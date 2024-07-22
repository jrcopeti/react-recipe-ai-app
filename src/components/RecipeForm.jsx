import React from "react";

function RecipeForm({ onGenerateRecipes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock data for new recipes
    const newRecipes = [
      {
        title: "Quick Veggie Stir-Fry",
        description:
          "A vibrant and speedy stir-fry using bell peppers, carrots, and tofu.",
        preparationTime: "20 minutes",
        difficultyLevel: "Easy",
        dietaryCompliance: "Vegan and gluten-free",
        ingredients: [
          "1 red bell pepper, sliced",
          "1 cup carrots, sliced",
          "1 cup firm tofu, cubed",
          "2 tablespoons gluten-free soy sauce",
          "1 tablespoon olive oil",
          "2 cloves garlic, minced",
        ],
        instructions: [
          "Heat olive oil in a large skillet over medium heat.",
          "Add garlic and sauté for 1 minute.",
          "Add tofu cubes and cook until golden, about 5 minutes.",
          "Add bell peppers and carrots, stir-frying for an additional 5 minutes.",
          "Stir in soy sauce and cook for another 3 minutes.",
          "Serve hot, garnished with sesame seeds if desired.",
        ],
        servingSize: "2 servings",
        scalingInstructions:
          "Adjust the ingredients proportionally for more servings.",
        servingSuggestions: "Serve with steamed rice or noodles.",
        notesAndTips:
          "You can add other vegetables like broccoli or snap peas.",
      },
    ];
    onGenerateRecipes(newRecipes);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <button
        type="submit"
        className="bg-pallette-50 btn btn-primary text-black"
      >
        Generate Recipes
      </button>
    </form>
  );
}

export default RecipeForm;
