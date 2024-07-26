import { useEffect, useState } from "react";
import { fetchImage as fetchImageApi } from "../services/apiUnsplash";

function useImage(recipe) {
  const [image, setImage] = useState(null);
  const [isLoadingImage, setIsLoading] = useState(false);
  const [errorImage, setErrorImage] = useState(null);
  console.log("recipe in useImage hook", recipe);
  const getImage = async () => {
    setIsLoading(true);
    setErrorImage(null);

    try {
      const data = await fetchImageApi(recipe.query);
      setImage(data);
    } catch (error) {
      setErrorImage(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (recipe) {
      getImage(recipe.query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe]);
  return { image, isLoadingImage, errorImage, getImage };
}

export { useImage };
