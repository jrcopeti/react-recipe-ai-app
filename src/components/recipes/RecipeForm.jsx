function RecipeForm({
  handleGenerateRecipe,
  handleIngredient1Input,
  handleIngredient2Input,
  handleIngredient3Input,
  handleIngredient4Input,
  handleIngredient5Input,
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
  ingredient5,
  guests,
  time,
  difficulty,
  dietaryOption,
  cuisine,
  typeOfMeal,
}) {
  return (
    <>
      <form onSubmit={handleGenerateRecipe}>

        <div className="m-[10px] flex flex-col items-center justify-start">
          <label className="form-control w-full max-w-lg text-4xl font-medium">

            <div className="label">
              What have you got left in your fridge and pantry? Choose up to
              five ingredients for your recipe.
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                Ingredient 1: <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              required
              placeholder="Type here:"
              value={ingredient1}
              onChange={handleIngredient1Input}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                Ingredient 2:<span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              required
              placeholder="Type here"
              value={ingredient2}
              onChange={handleIngredient2Input}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                Ingredient 3:<span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              required
              placeholder="Type here"
              value={ingredient3}
              onChange={handleIngredient3Input}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">Ingredient 4:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={ingredient4}
              onChange={handleIngredient4Input}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">Ingredient 5:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={ingredient5}
              onChange={handleIngredient5Input}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                Vegetarian, lactose intolerant? Choose an option
              </span>
            </div>
            <select
              className="select select-bordered border-2 border-pallette-50 text-xl"
              name="options"
              onChange={handleDietaryOptionsInput}
              value={dietaryOption}
            >
              <option value="none"> None </option>
              <option value="pescatarian">Pescatarian</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="lactoseFree">Lactose Free</option>
              <option value="gluten">Gluten Free</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                How advanced are your cooking skills?
              </span>
            </div>
            <select
              className="select select-bordered border-2 border-pallette-50 text-xl"
              name="difficulty"
              onChange={handleDifficultyInput}
              value={difficulty}
            >
              <option value="easy">Bloody Beginner</option>
              <option value="medium">Hobby Cook</option>
              <option value="hard">Chef</option>
            </select>
          </label>

          {/* <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Do you have a preferred cuisine?
              </span>
            </div>
            <select
              className="select select-bordered"
              name="difficulty"
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
          </label> */}

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                How much time do you have for cooking?
                <span className="text-red-500">*</span>
              </span>
            </div>
            <div className="w-full">
              <input
                type="range"
                required
                min={15}
                max="90"
                value={time}
                className="range"
                step="15"
                onChange={handleTimeInput}
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>{time === 15}</span>
                <span>{time === 30}</span>
                <span>{time === 45}</span>
                <span>{time === 60}</span>
                <span>{time === 75}</span>
                <span>{time === 90}</span>
              </div>
              <div className="mt-2 text-center">{time} Minutes</div>
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">What type of meal?</span>
            </div>
            <select
              className="select select-bordered border-2 border-pallette-50 text-xl"
              name="difficulty"
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

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                For how many people do you like to cook?
                <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="number"
              required
              placeholder="2"
              value={guests}
              onChange={handleGuestsInput}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs text-xl">
            <button

              className="rounded-lg border-2 border-pallette-50 bg-pallette-300 px-9 py-3 text-2xl font-normal text-pallette-500 shadow-md shadow-zinc-500 transition duration-200 hover:bg-pallette-50 hover:text-pallette-500"

              type="submit"
            >
              Generate Recipe
            </button>
          </label>
        </div>
      </form>
    </>
  );
}

export default RecipeForm;
