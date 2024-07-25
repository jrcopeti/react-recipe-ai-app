import { useParams } from "react-router-dom";
import FavoriteRecipeCard from "../../components/recipes/FavoriteRecipeCard";

export default function Recipe() {
  const { id } = useParams();
  return (
    <div className="flex items-center justify-center">
      <FavoriteRecipeCard id={id} />
    </div>
  );
}
