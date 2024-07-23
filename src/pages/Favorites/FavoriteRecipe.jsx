import { useParams } from "react-router-dom";
import FavoriteRecipeCard from "../../components/recipes/FavoriteRecipeCard";

export default function Recipe() {
  const { id } = useParams();
  return <FavoriteRecipeCard id={id} />;
}
