// React
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Hooks
import { useGetRecipeById } from "../../hooks/useGetRecipeById";
import { useUpdateRecipe } from "../../hooks/useUpdateRecipe";

import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";

import StarRating from "./StarRating";
import StarDisplay from "./StarDisplay";

function FavoriteRecipeCard() {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  // review state
  const [isReviewing, setIsReviewing] = useState(false);
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  // get recipe by id
  const {
    recipe: favoriteRecipe,
    getRecipeById,
    errorRecipeById,
    isLoading,
  } = useGetRecipeById(recipeId);

  // update recipe
  const {
    updateRecipe,
    isLoading: isUpdating,
    errorUpdate,
  } = useUpdateRecipe(getRecipeById);
  console.log("errorUpdate in favorite card", errorUpdate);

  // delete recipe
  const { deleteRecipe } = useDeleteRecipe();

  const handleDeleteRecipe = async (id) => {
    console.log("Recipe deleted in Favorite recipes list", id);
    await deleteRecipe(id);

    navigate("/recipes");
  };

  const toggleReview = () => {
    setIsReviewing((prevState) => !prevState);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...favoriteRecipe,
      reviews: [
        ...favoriteRecipe.reviews,
        {
          rating: +rating,
          review: review,
        },
      ],
    };
    try {
      await updateRecipe(favoriteRecipe.id, updatedRecipe);
      setRating(1);
      setReview("");
      setIsReviewing(false);
      console.log("review submitted");
    } catch {
      console.error("Error updating review");
    }
  };

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg">wjhbldjhebdkfj</span>
      </div>
    );

  if (!favoriteRecipe && !isLoading)
    return (
      <div className="flex w-fit flex-col rounded-lg border-2 border-pallette-50 bg-pallette-400 p-6 text-pallette-50 shadow-md shadow-zinc-500">
        <p>No Recipe was found here...</p>
      </div>
    );

  if (errorRecipeById)
    return (
      <div className="mt-3 flex w-fit flex-col items-center justify-center rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-pallette-500 shadow-lg">
        <p>There was an error. Try again</p>
        <Link
          to="/recipes"
          className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
          onClick={() => window.location.reload()}
        >
          Try again
        </Link>
      </div>
    );

  return (
    <div className="bg-transparent text-6xl font-normal text-cyan-950">
      <h2 className="mb-4 text-center text-4xl font-bold text-pallette-10">
        {favoriteRecipe.title}
      </h2>

      <div className="flex flex-col lg:flex-row">
        <img
          src={favoriteRecipe.image}
          alt={favoriteRecipe.title}
          className="mb-2 h-96 rounded-md object-cover object-center lg:w-1/2"
        />

        <div className="flex-1 pl-4 text-lg">
          <p className="mb-4 text-2xl text-cyan-950">
            {favoriteRecipe.description}
          </p>
          <p className="text-2xl">
            <strong>Preparation Time:</strong> {favoriteRecipe.preparationTime}
          </p>
          <p className="text-2xl">
            <strong>Difficulty Level:</strong> {favoriteRecipe.difficultyLevel}
          </p>
          <p className="text-2xl">
            <strong>Dietary Compliance:</strong> {favoriteRecipe.dietaryOptions}
          </p>
          <h3 className="mb-2 mt-4 text-3xl font-semibold text-pallette-10">
            Ingredients:
          </h3>
          <ul className="mb-4 list-inside list-disc text-center text-2xl">
            {favoriteRecipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="mb-2 text-3xl font-semibold text-pallette-10">
        Instructions:
      </h3>
      <ol className="mb-4 list-inside text-left text-2xl">
        {favoriteRecipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p className="text-2xl">
        <strong>Serving Size:</strong> {favoriteRecipe.servingSize}
      </p>
      <p className="text-2xl">
        <strong>Notes and Tips:</strong> {favoriteRecipe.tips}
      </p>

      <section>
        <h3 className="mt-4 text-4xl font-semibold">Reviews</h3>
        {favoriteRecipe.reviews.map((review, i) => (
          <div key={i}>
            <StarDisplay rating={review.rating} />
            <p className="text-xl">{review.review}</p>
          </div>
        ))}
      </section>

      {!isReviewing ? (
        <>
          <button
            className="btn btn-secondary border-2 border-pallette-50 bg-pallette-400 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
            onClick={() => toggleReview()}
          >
            Review Recipe
          </button>
          <button
            className="btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
            onClick={() => handleDeleteRecipe(favoriteRecipe.id)}
          >
            Remove from Favorites
          </button>
        </>
      ) : (
        <div className='flex justify-center items-center'>
          {errorUpdate ? (
              <div className="mt-3 flex w-fit flex-col items-center justify-center rounded-lg border-2 border-pallette-50 bg-pallette-600 p-6 text-pallette-500 shadow-lg text-2xl">
              <p>There was an error creating Review. Try Again.</p>
              <button
                className="space hover:text-pallette-500y btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleReviewSubmit}
              className="flex flex-col items-center justify-center"
            >
              <label className="form-control mt-4 w-full max-w-sm text-3xl">
                Choose a rating
                <StarRating rating={rating} setRating={setRating} />
                <input
                  type="text"
                  name="review"
                  placeholder="Write your review here..."
                  maxLength={100}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="input input-bordered my-2 w-[400px] border-2 border-pallette-50 text-xl"
                  disabled={isUpdating}
                  required
                />
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="btn btn-secondary border-2 border-pallette-50 bg-pallette-400 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-cyan-900 hover:text-pallette-500"
                  disabled={isUpdating}
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  className="btn btn-secondary m-2 max-w-xs border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
                  disabled={isUpdating}
                  onClick={() => toggleReview()}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default FavoriteRecipeCard;
