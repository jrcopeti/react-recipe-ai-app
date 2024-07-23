import { useState } from "react";

export default function GenerateRecipe() {
  const [incredient1, setIncredient1] = useState("");
  const [incredient2, setIncredient2] = useState("");
  const [incredient3, setIncredient3] = useState("");
  const [incredient4, setIncredient4] = useState("");
  const [incredient5, setIncredient5] = useState("");
  const [time, setTime] = useState(15);
  const [options, setOptions] = useState("none");
  // const [intolerance, setIntolerance] = useState("none");
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("none");
  const [guests, setGuests] = useState(2);

  const handleIncredient1Input = (e) => setIncredient1(e.target.value);
  const handleIncredient2Input = (e) => setIncredient2(e.target.value);
  const handleIncredient3Input = (e) => setIncredient3(e.target.value);
  const handleIncredient4Input = (e) => setIncredient4(e.target.value);
  const handleIncredient5Input = (e) => setIncredient5(e.target.value);
  const handleTimeInput = (e) => setTime(e.target.value);
  const handleOptionsInput = (e) => setOptions(e.target.value);
  // const handleIntoleranceInput = (e) => setIntolerance(e.target.value);
  const handleDifficultyInput = (e) => setDifficulty(e.target.value);
  const handleTypeInput = (e) => setType(e.target.value);
  const handleGuestsInput = (e) => setGuests(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      incredient1,
      incredient2,
      incredient3,
      incredient4,
      incredient5,
      time,
      options,
      // intolerance,
      difficulty,
      type,
      guests,
    };

    // setRecipes([...receipes, newRecipe]);
    console.log("Submitted: ", newRecipe);

    // Reset the state
    setIncredient1("");
    setIncredient2("");
    setIncredient3("");
    setIncredient4("");
    setIncredient5("");
    setTime(15);
    setOptions("");
    setDifficulty("easy");
    setType("none");
    setGuests(2);
  };

  return (
    <>
      <h1>I am a form to generate a recipe.</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                What have you got left in your fridge and pantry? Choose up to
                five incredients for your recipe.
              </div>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Incredient 1:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={incredient1}
                onChange={handleIncredient1Input}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Incredient 2:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={incredient2}
                onChange={handleIncredient2Input}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Incredient 3:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={incredient3}
                onChange={handleIncredient3Input}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Incredient 4:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={incredient4}
                onChange={handleIncredient4Input}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Incredient 5:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={incredient5}
                onChange={handleIncredient5Input}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Vegetarian, lactose intolerant? Choose an otption</span>
            </div>
            <select
              className="select select-bordered"
              name="options"
              onChange={handleOptionsInput}
              value={options}
            >
              <option value="none"> None </option>
              <option value="pescetarian">Pescetarian</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="lactoseFree">Lactose Free</option>
              <option value="gluten">Gluten Free</option>
            </select>
          </label>

          {/* <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Any known food intolerance?</span>
            </div>
            <select
              className="select select-bordered"
              name="intolerance"
              onChange={handleIntoleranceInput}
              value={intolerance}
            >
              <option value="none"> None </option>
              <option value="lactose">Lactose</option>
              <option value="gluten">Gluten</option>
              <option value="salicyclates">Salicylates </option>
            </select>
          </label> */}

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                How advanced are your cooking skills?
              </span>
            </div>
            <select
              className="select select-bordered"
              name="difficulty"
              onChange={handleDifficultyInput}
              value={difficulty}
            >
              <option value="easy">Bloody Beginner</option>
              <option value="medium">Hobby Cook</option>
              <option value="hard">Chef</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Do you have a preferred type or style of cooking?
              </span>
            </div>
            <select
              className="select select-bordered"
              name="difficulty"
              onChange={handleTypeInput}
              value={type}
            >
              <option>Pick one</option>
              <option value="asian">Asian</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="fusion">Fusion</option>
              <option value="spicy">Spicy</option>
              <option value="sweet">Sweet</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                How much time do you have for cooking?
              </span>
            </div>
            <div className="w-full">
              <input
                type="range"
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

            <label className="form-control w-full max-w-xs">
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
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </label>
          <label className="form-control w-full max-w-xs">
            <button className="btn" type="submit">
              Generate Recipe
            </button>
          </label>
        </div>
      </form>
    </>
  );
}
