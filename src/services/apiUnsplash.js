import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_KEY}&query=`;

const fetchImage = async (query) => {
  let image;
  console.log("query", query);

  const encodedQuery = encodeURI(query);
  console.log("encodedQuery", encodedQuery);

  try {
    const { data } = await axios.get(`${url}${encodedQuery}`);
    console.log(data);
    image = data.results[1].urls.regular;
    console.log(image);
    return image;
  } catch (error) {
    console.error(error);
  }
};

export { fetchImage };
