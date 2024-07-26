import {
  sortedCuisines,
  sortedDietaryOptions,
  sortedTypesOfMeal,
} from "../../assets/data";

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

          {/* Form Title */}
          <label className="form-control mx-auto w-full max-w-2xl">
            <h2 className="label text-center text-3xl">
              Choose up to 4 ingredients and let us surprise you with a recipe.
            </h2>
          </label>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/* Ingredient 1 */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">

                <span className="label-text text-2xl">
                  Ingredient 1: <span className="text-rose-700">*</span>

                </span>
              </div>
              <input
                type="text"
                name="ingredient1"
                placeholder="Type here"
                value={ingredient1}
                onChange={handleIngredient1Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
                required
              />
            </label>

            {/* Ingredient 2*/}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">

                <span className="label-text text-2xl">
                  Ingredient 2: <span className="text-rose-700">*</span>

                </span>
              </div>
              <input
                type="text"
                name="ingredient2"
                placeholder="Type here"
                value={ingredient2}
                onChange={handleIngredient2Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
                required
              />
            </label>


            {/* Ingredient 3 */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">Ingredient 3:</span>

              </div>
              <input
                type="text"
                name="ingredient3"
                placeholder="Type here"
                value={ingredient3}
                onChange={handleIngredient3Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
              />
            </label>


            {/* Ingredient 4 */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">Ingredient 4:</span>

              </div>
              <input
                type="text"
                name="ingredient4"
                placeholder="Type here"
                value={ingredient4}
                onChange={handleIngredient4Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
              />
            </label>
          </div>


          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Time */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">

                <span className="label-text text-2xl">
                  How much time do you have for cooking?{" "}
                  <span className="text-rose-700">*</span>

                </span>
              </div>
              <div className="w-full text-cyan-950">
                <input
                  type="range"
                  name="time"
                  min={15}
                  max={90}
                  step={15}
                  value={time}
                  onChange={handleTimeInput}
                  className="range text-xl"
                  required
                />
                <div className="flex w-full justify-between px-2 text-xs text-cyan-950">
                  <span>15</span>
                  <span>30</span>
                  <span>45</span>
                  <span>60</span>
                  <span>75</span>
                  <span>90</span>
                </div>
                <div className="mt-2 text-center text-cyan-950">
                  {time} Minutes
                </div>
                <div className="label">
                  <span className="label-text-alt"></span>
                </div>
              </div>
            </label>


            {/* Guests */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">
                  For how many people do you like to cook?{" "}
                  <span className="text-rose-700">*</span>

                </span>
              </div>
              <input
                required
                type="number"
                name="guests"
                min={1}
                max={12}
                value={guests}
                onChange={handleGuestsInput}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl text-cyan-950"
              />
              <div className="label">
                <span className="label-text-alt"></span>
              </div>
            </label>
          </div>


          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Difficulty */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">
                  How advanced are your cooking skills?

                </span>
              </div>
              <select
                className="select select-bordered w-full border-2 border-pallette-50 text-xl"

                name="difficulty"
                onChange={handleDifficultyInput}
                value={difficulty}
              >
                <option value="easy">Bloody Beginner</option>
                <option value="medium">Hobby Cook</option>
                <option value="hard">Chef</option>
              </select>
            </label>

            {/* Dietary Options */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">
                  Any dietary options?
                </span>
              </div>
              <select
                className="select select-bordered border-2 border-pallette-50 text-xl"
                name="dietaryOptions"
                onChange={handleDietaryOptionsInput}
                value={dietaryOption}
              >
                <option value="">Pick one</option>
                {sortedDietaryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Type of Meal */}

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">What type of meal?</span>
              </div>
              <select
                className="select select-bordered border-2 border-pallette-50 text-xl"
                name="difficulty"
                onChange={handleTypeOfMealInput}
                value={typeOfMeal}
              >
                <option value="">Pick one</option>
                {sortedTypesOfMeal.map((meal) => (
                  <option key={meal.value} value={meal.value}>
                    {meal.label}
                  </option>
                ))}
              </select>
            </label>

            {/* Cuisine */}
            <label className="form-control mx-auto w-full max-w-sm">
              <div className="label">
                <span className="label-text text-2xl">
                  Do you have a preferred cuisine?
                </span>
              </div>
              <select
                className="select select-bordered border-2 border-pallette-50 text-xl"
                name="cuisine"
                onChange={handleCuisineInput}
                value={cuisine}
              >
                <option>Pick one</option>
                {sortedCuisines.map((cuisine) => (
                  <option key={cuisine.value} value={cuisine.value}>
                    {cuisine.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            className="rounded-lg border-2 border-pallette-50 bg-pallette-300 px-9 py-3 text-2xl font-normal text-pallette-500 shadow-md shadow-slate-500 transition duration-200 hover:bg-pallette-50 hover:text-pallette-500"

            type="submit"
          >
            Generate Recipe
          </button>
        </div>
      </form>
    </>
  );
}

export default RecipeForm;
