import { useParams } from "react-router-dom";
import FavoriteRecipeCard from "../../components/recipes/FavoriteRecipeCard";

function FavoriteRecipe() {
  const { id } = useParams();
  return (
    <div className="flex items-center justify-center">
      <FavoriteRecipeCard id={id} />
    </div>
  );
}

export default FavoriteRecipe;
