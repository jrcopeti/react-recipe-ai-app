import { useState } from "react";
import { useRecipe } from "../hooks/useRecipe";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { recipe, isLoading, error } = useRecipe(prompt);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("prompt:---", prompt);
    setPrompt(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe:
          <input
            type="text"
            name="recipe"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <button type="submit">Submit Recipe</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
