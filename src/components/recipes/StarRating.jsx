function StarRating({ rating, setRating }) {
  return (
    <div className="rating m-2 flex items-center justify-center">
      <input type="radio" name="rating-2" className="rating-hidden" />

      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="rating-2"
          value={value}
          className={`mask mask-star-2 mx-1 bg-orange-400 hover:bg-orange-500`}
          checked={rating === value}
          onChange={() => setRating(value)}
        />
      ))}
    </div>
  );
}

export default StarRating;
