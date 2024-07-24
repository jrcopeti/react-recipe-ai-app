function RecipeForm({
  handleGenerateRecipe,
  handleIngredient1Input,
  handleIngredient2Input,
  handleIngredient3Input,
  handleIngredient4Input,
  handleGuestsInput,
  handleTimeInput,
  handleDifficultyInput,
  handleDietaryOptionsInput,
  handleCuisineInput,
  handleTypeOfMealInput,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  guests,
  time,
  difficulty,
  dietaryOption,
  cuisine,
  typeOfMeal,
}) {
  return (
    <>
      <form
        onSubmit={handleGenerateRecipe}
        className="flex flex-col items-center p-4"
      >
        <div className="flex w-full max-w-4xl flex-col items-center space-y-6 md:space-y-8 lg:space-y-10">
          <label className="form-control w-full">
            <div className="label text-center">
              What have you got left in your fridge and pantry? Choose up to
              five ingredients for your recipe.
            </div>
          </label>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Ingredient 1:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient1}
                onChange={handleIngredient1Input}
                className="input input-bordered w-full"
                required
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt text-xs italic">*required</span>
              </div>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Ingredient 2:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient2}
                onChange={handleIngredient2Input}
                className="input input-bordered w-full"
                required
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="abel-text-alt text-xs italic">*required</span>
              </div>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Ingredient 3:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient3}
                onChange={handleIngredient3Input}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Ingredient 4:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient4}
                onChange={handleIngredient4Input}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text" required>
                  How much time do you have for cooking?
                </span>
              </div>
              <div className="w-full">
                <input
                  type="range"
                  min={15}
                  max="90"
                  value={time}
                  step="15"
                  onChange={handleTimeInput}
                  className="range range-secondary"
                />
                <div className="flex w-full justify-between px-2 text-xs">
                  <span>15</span>
                  <span>30</span>
                  <span>45</span>
                  <span>60</span>
                  <span>75</span>
                  <span>90</span>
                </div>
                <div className="mt-2 text-center">{time} Minutes</div>
              </div>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  For how many people do you like to cook?
                </span>
              </div>
              <input
                type="number"
                placeholder="2"
                value={guests}
                onChange={handleGuestsInput}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Vegetarian? Any intolerances?
                </span>
              </div>
              <select
                className="select select-bordered w-full"
                name="options"
                onChange={handleDietaryOptionsInput}
                value={dietaryOption}
              >
                <option value="none"> None </option>
                <option value="pescetarian">Pescetarian</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="lactoseFree">Lactose Free</option>
                <option value="gluten">Gluten Free</option>
              </select>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  How advanced are your cooking skills?
                </span>
              </div>
              <select
                className="select select-bordered w-full"
                name="difficulty"
                onChange={handleDifficultyInput}
                value={difficulty}
              >
                <option value="easy">Bloody Beginner</option>
                <option value="medium">Hobby Cook</option>
                <option value="hard">Chef</option>
              </select>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Do you have a preferred cuisine?
                </span>
              </div>
              <select
                className="select select-bordered w-full"
                name="cuisine"
                onChange={handleCuisineInput}
                value={cuisine}
              >
                <option>Pick one</option>
                <option value="asian">Asian</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="fusion">Fusion</option>
                <option value="spicy">Spicy</option>
                <option value="sweet">Sweet</option>
              </select>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">What type of meal?</span>
              </div>
              <select
                className="select select-bordered w-full"
                name="mealType"
                onChange={handleTypeOfMealInput}
                value={typeOfMeal}
              >
                <option>Pick one</option>
                <option value="starter">Starter</option>
                <option value="main-course">Main Course</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </label>
          </div>

          <div className="form-control mx-auto flex w-full max-w-xs">
            <button
              className="rounded-lg border-2 border-pallette-50 bg-pallette-300 px-9 py-3 text-2xl font-normal text-pallette-500 transition duration-200 hover:bg-pallette-50 hover:text-pallette-500"
              type="submit"
            >
              Generate Recipe
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default RecipeForm;
