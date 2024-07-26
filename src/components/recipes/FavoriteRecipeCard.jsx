import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetRecipeById } from "../../hooks/useGetRecipeById";
import { useDeleteRecipe } from "../../hooks/useDeleteRecipe";
import { useUpdateRecipe } from "../../hooks/useUpdateRecipe";
import { useState } from "react";
import StarRating from "./StarRating";
import StarDisplay from "./StarDisplay";

function FavoriteRecipeCard() {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const {
    recipe: favoriteRecipe,
    getRecipeById,
    errorRecipeById,
    isLoading,
  } = useGetRecipeById(recipeId);

  const {
    updateRecipe,
    isLoading: isUpdating,
    errorUpdate,
  } = useUpdateRecipe(getRecipeById);

  const { deleteRecipe } = useDeleteRecipe();

  console.log(" smnjsns", errorUpdate);

  console.log(" favorite recipe in favorite recipe card", favoriteRecipe);
  const [isReviewing, setIsReviewing] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
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
  };

  if (!isLoading && !favoriteRecipe)
    return (
      <div className="flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-md shadow-zinc-500">
        <p>No Recipe was found here...</p>
      </div>
    );

  if (errorRecipeById)
    return (
      <div className="flex w-fit flex-col rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-md shadow-zinc-500">
        <p>Error: {errorRecipeById.message}</p>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    );
  return (
    <div className="rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-md shadow-zinc-500">
      <h2 className="mb-2 text-3xl font-bold">{favoriteRecipe.title}</h2>
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
      <h3 className="mb-2 mt-4 font-semibold">Ingredients:</h3>
      <ul className="mb-4 list-inside list-disc">
        {favoriteRecipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 className="mb-2 mt-4 font-semibold">Instructions:</h3>
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
              <strong>Rating:</strong> <StarDisplay rating={review.rating} />
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </section>

      {!isReviewing ? (
        <>
          <button
            className="btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
            onClick={() => handleDeleteRecipe(favoriteRecipe.id)}
          >
            Remove from Favorites
          </button>
          <button
            className="btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
            onClick={() => toggleReview()}
          >
            Review Recipe
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
            <form onSubmit={handleReviewSubmit}>
              <label className="block" htmlFor="rating">
                Choose a rating from one to five stars:
              </label>
              <StarRating rating={rating} setRating={setRating} />
              <input
                className="m-2 w-full rounded-lg border-2 border-pallette-50 p-2"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                disabled={isUpdating}
              />

              <button
                type="submit"
                className="btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <span className="loading loading-ring loading-sm"></span>
                ) : (
                  "Submit Review"
                )}
              </button>
            </form>
          )}
        </>
      )}

      <button
        className="btn btn-secondary border-2 border-pallette-50 bg-pallette-300 font-normal text-pallette-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500"
        onClick={() => handleDeleteRecipe(favoriteRecipe.id)}
      >
        Remove from Favorites
      </button>
    </div>
  );
}

export default FavoriteRecipeCard;
