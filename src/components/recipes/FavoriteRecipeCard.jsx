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

  // delete recipe
  const { deleteRecipe } = useDeleteRecipe();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg">wjhbldjhebdkfj</span>
      </div>
    );

  const handleDeleteRecipe = (id) => {
    console.log("Recipe deleted in Favorite recipes list", id);
    deleteRecipe(id);
    navigate("/recipes");
  };

  const toggleReview = () => {
    setIsReviewing((prevState) => !prevState);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log("review submitted");
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
    updateRecipe(favoriteRecipe.id, updatedRecipe);
    setRating(1);
    setReview("");
    setIsReviewing(false);
  };

  if (!isLoading && !favoriteRecipe)
    return (
      <div className="flex w-fit flex-col rounded-lg border-2 border-pallette-50 bg-pallette-400 p-6 text-pallette-50 shadow-md shadow-zinc-500">
        <p>No Recipe was found here...</p>
      </div>
    );

  if (errorRecipeById)
    return (
      <div className="flex w-fit flex-col rounded-lg border-2 border-pallette-50 bg-pallette-400 p-6 text-pallette-500 shadow-md shadow-zinc-500">
        <p>Error: {errorRecipeById.message}</p>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  return (
    <div className="bg-transparent p-6 font-normal text-cyan-950">
      <h2 className="text-pallette-10 mb-2 text-3xl font-bold">
        {favoriteRecipe.title}
      </h2>
      <p className="mb-4 text-cyan-950">{favoriteRecipe.description}</p>
      <p>
        <strong>Preparation Time:</strong> {favoriteRecipe.preparationTime}
      </p>
      <p>
        <strong>Difficulty Level:</strong> {favoriteRecipe.difficultyLevel}
      </p>
      <p>
        <strong>Dietary Compliance:</strong> {favoriteRecipe.dietaryOptions}
      </p>
      <h3 className="text-pallette-10 mb-2 mt-4 font-semibold">Ingredients:</h3>
      <ul className="mb-4 list-inside list-disc">
        {favoriteRecipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 className="text-pallette-10 mb-2 mt-4 font-semibold">
        Instructions:
      </h3>
      <ol className="mb-4 list-inside list-decimal">
        {favoriteRecipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Serving Size:</strong> {favoriteRecipe.servingSize}
      </p>
      <p>
        <strong>Notes and Tips:</strong> {favoriteRecipe.tips}
      </p>

      <section>
        <h3 className="mb-2 mt-4 font-semibold">Reviews:</h3>
        {favoriteRecipe.reviews.map((review, i) => (
          <div key={i} className="mb-4">
            <div>
              <StarDisplay rating={review.rating} />
            </div>
            <p>{review.review}</p>
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
        <>
          {errorUpdate ? (
            <div className="flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
              <p>There was an error in creating a review. </p>
              <button
                className="btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
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
              <label className="form-control w-full max-w-sm">
                Choose a rating:
                <StarRating rating={rating} setRating={setRating} />
                <input
                  type="text"
                  name="review"
                  placeholder="Write your review here..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="input input-bordered my-2 w-full border-2 border-pallette-50 text-xl"
                  disabled={isUpdating}
                  required
                />
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="btn btn-secondary m-2 max-w-xs border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
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
        </>
      )}
    </div>
  );
}

export default FavoriteRecipeCard;
