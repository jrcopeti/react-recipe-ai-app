function StarDisplay({ rating }) {
  return (
    <div className="rating rating-sm">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name={`rating-${value}`}
          className={`mask mask-star cursor-default ${value <= rating ? "bg-pallette-300" : "bg-gray-300"}`}
          readOnly
          checked={value === rating}
        />
      ))}
    </div>
  );
}

export default StarDisplay;
