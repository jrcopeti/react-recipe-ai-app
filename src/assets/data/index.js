const dietaryOptions = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "gluten-free", label: "Gluten-Free" },
  { value: "dairy-free", label: "Dairy-Free" },
  { value: "nut-free", label: "Nut-Free" },
  { value: "low-carb", label: "Low-Carb" },
  { value: "low-fat", label: "Low-Fat" },
  { value: "low-sugar", label: "Low-Sugar" },
  { value: "pescatarian", label: "Pescatarian" },
  { value: "sugar-free", label: "Sugar-Free" },
];

const sortedDietaryOptions = dietaryOptions.sort((a, b) =>
  a.label.localeCompare(b.label),
);

const cuisines = [
  { value: "italian", label: "Italian" },
  { value: "chinese", label: "Chinese" },
  { value: "indian", label: "Indian" },
  { value: "mexican", label: "Mexican" },
  { value: "japanese", label: "Japanese" },
  { value: "french", label: "French" },
  { value: "thai", label: "Thai" },
  { value: "greek", label: "Greek" },
  { value: "spanish", label: "Spanish" },
  { value: "lebanese", label: "Lebanese" },
  { value: "korean", label: "Korean" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "american", label: "American" },
  { value: "turkish", label: "Turkish" },
  { value: "moroccan", label: "Moroccan" },
  { value: "caribbean", label: "Caribbean" },
  { value: "brazilian", label: "Brazilian" },
  { value: "peruvian", label: "Peruvian" },
];

const sortedCuisines = cuisines.sort((a, b) => a.label.localeCompare(b.label));

const typesOfMeal = [
  { value: "breakfast", label: "Breakfast" },
  { value: "brunch", label: "Brunch" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "dessert", label: "Dessert" },
  { value: "snack", label: "Snack" },
  { value: "appetizer", label: "Appetizer" },
  { value: "side", label: "Side" },
  { value: "main", label: "Main" },
  { value: "beverage", label: "Beverage" },
];

const sortedTypesOfMeal = typesOfMeal.sort((a, b) =>
  a.label.localeCompare(b.label),
);

export { sortedDietaryOptions, sortedCuisines, sortedTypesOfMeal };
