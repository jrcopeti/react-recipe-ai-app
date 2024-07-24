import { useEffect, useState } from "react";
import { fetchImage as fetchImageApi } from "../services/apiUnsplash";

function useImage(query) {
  const [image, setImage] = useState(null);
  const [isLoadingImage, setIsLoading] = useState(false);
  const [errorImage, setErrorImage] = useState(null);
  console.log("query in useImage hook", query);
  const getImage = async () => {
    setIsLoading(true);
    setErrorImage(null);

    try {
      const data = await fetchImageApi(query.query);
      setImage(data);
    } catch (error) {
      setErrorImage(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getImage(query.query);
    }
  }, [query]);
  return { image, isLoadingImage, errorImage, getImage };
}

export { useImage };
