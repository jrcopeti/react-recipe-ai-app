import RecipeForm from "./RecipeForm";
import { useFetchRecipeAi } from "../../hooks/useFetchRecipeAi";
import RecipeCard from "./RecipeCard";
import { useCreateRecipe } from "../../hooks/useCreateRecipe";
import { useState } from "react";

function GenerateRecipe() {
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState(15);
  const [difficulty, setDifficulty] = useState("");
  const [dietaryOption, setDietaryOption] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [typeOfMeal, setTypeOfMeal] = useState("");

  const { recipe, isLoadingRecipeAi, errorAi, fetchRecipeAi, setRecipe } =
    useFetchRecipeAi();
  const {
    createRecipe,
    isLoading: isCreating,
    errorCreating,
    setErrorCreating,
  } = useCreateRecipe();
  console.log(recipe);

  const handleIngredient1Input = (e) => setIngredient1(e.target.value);
  const handleIngredient2Input = (e) => setIngredient2(e.target.value);
  const handleIngredient3Input = (e) => setIngredient3(e.target.value);
  const handleIngredient4Input = (e) => setIngredient4(e.target.value);
  const handleIngredient5Input = (e) => setIngredient5(e.target.value);
  const handleGuestsInput = (e) => setGuests(e.target.value);
  const handleTimeInput = (e) => setTime(e.target.value);
  const handleDifficultyInput = (e) => setDifficulty(e.target.value);
  const handleDietaryOptionsInput = (e) => setDietaryOption(e.target.value);
  const handleCuisineInput = (e) => setCuisine(e.target.value);
  const handleTypeOfMealInput = (e) => setTypeOfMeal(e.target.value);

  const handleGenerateRecipe = (e) => {
    e.preventDefault();
    console.log("generate recipe");

    const prompt = `Provide a detailed and relevant recipe suggestion that aligns with the following parameters:

  Ingredients Available: The user has the following ingredients (max amount of 5): ${ingredient1}, ${ingredient2}, ${ingredient3}, ${ingredient4}, ${ingredient5}  . These ingredients are what they have on hand, so the recipes should primarily use these items. If additional ingredients are required, substitutions that are commonly available or flexible options.

  Number of Guests: The meal should be suitable for ${guests} guest(s).

  The user has ${time} minutes available for preparing the meal. Suggest recipes that can be cooked within this timeframe. If a dish requires more time, offer quick and effective shortcuts or alternative methods to meet the time constraint.

  Dietary Options: The user has the following dietary options: ${dietaryOption}. Please take these into account when suggesting recipes. For example, if the option is vegan, ensure that no animal products are included. If the restriction is gluten-free, avoid any ingredients containing gluten. Clearly state how each recipe complies with the dietary restrictions.

  Difficulty Level: The user prefers recipes that are ${difficulty} in terms of difficulty. Provide recipes that match this preference, ensuring that the instructions are clear and easy to follow.

  Type of Cuisine: The user prefers ${cuisine} cuisine (e.g., Italian, Asian). Tailor your suggestions to this preference if it has been specified.

  Type of Meal: The user prefers ${typeOfMeal} type of meal. Tailor your suggestions to this preference if it has been specified.`;

    fetchRecipeAi(prompt);

    setIngredient1("");
    setIngredient2("");
    setIngredient3("");
    setIngredient4("");
    setIngredient5("");
    setTime(15);
    setDifficulty("");
    setDietaryOption("");
    setCuisine("");
    setGuests(1);
    setTypeOfMeal("");
    console.log("recipe generated");
  };

  const handleFavoriteRecipe = async (recipe) => {
    const newRecipe = {
      ...recipe,
      reviews: [],
    };
    try {
      await createRecipe(newRecipe);
      console.log("recipe saved----------------", recipe);
      setRecipe(null);
    } catch (error) {
      console.error("Error saving recipe", error);
    }
  };

  const handleDiscardRecipe = () => {
    setRecipe(null);
  };

  if (isLoadingRecipeAi)
    return <span className="loading loading-ring loading-lg"></span>;

  if (errorAi)
    return (
      <div className="flex w-full flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-md shadow-zinc-500">
        <p>There was an error in generating a recipe</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );

  return (
    <>
      <div>
        {!recipe && !errorAi ? (
          <RecipeForm
            handleGenerateRecipe={handleGenerateRecipe}
            handleIngredient1Input={handleIngredient1Input}
            handleIngredient2Input={handleIngredient2Input}
            handleIngredient3Input={handleIngredient3Input}
            handleIngredient4Input={handleIngredient4Input}
            handleIngredient5Input={handleIngredient5Input}
            handleGuestsInput={handleGuestsInput}
            handleTimeInput={handleTimeInput}
            handleDifficultyInput={handleDifficultyInput}
            handleDietaryOptionsInput={handleDietaryOptionsInput}
            handleCuisineInput={handleCuisineInput}
            handleTypeOfMealInput={handleTypeOfMealInput}
            ingredient1={ingredient1}
            ingredient2={ingredient2}
            ingredient3={ingredient3}
            ingredient4={ingredient4}
            ingredient5={ingredient5}
            guests={guests}
            time={time}
            difficulty={difficulty}
            dietaryOption={dietaryOption}
            cuisine={cuisine}
            typeOfMeal={typeOfMeal}
          />
        ) : (
          <RecipeCard
            recipe={recipe}
            handleFavoriteRecipe={handleFavoriteRecipe}
            handleDiscardRecipe={handleDiscardRecipe}
            isCreating={isCreating}
            errorCreating={errorCreating}
            setErrorCreating={setErrorCreating}
          />
        )}
      </div>
    </>
  );
}

export default GenerateRecipe;
