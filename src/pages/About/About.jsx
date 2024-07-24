function About() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-5xl p-4 text-center">
        <h1 className="mb-8 text-6xl font-normal text-cyan-950">
          About Dinner Generator
        </h1>
        <p className="mb-12 text-balance text-2xl font-semibold text-cyan-950">
          Welcome to Dinner Generator, your personal recipe assistant! Our app
          helps you transform the ingredients you already have into delightful
          dinner ideas. Simply enter up to five items from your fridge, and let
          our AI, powered by ChatGPT, suggest creative and suitable recipes
          tailored to your preferences and dietary needs.
        </p>
        <h2 className="mb-8 text-4xl font-semibold text-cyan-950">
          Key Features
        </h2>
        <ul className="mb-12 list-inside list-disc text-center text-2xl font-semibold text-cyan-950">
          <li>
            Ingredient-Based Recipes: Input the ingredients you have, and
            receive recipes that make the most of what’s in your fridge.
          </li>
          <li>
            Tailored Suggestions: Customize your recipe search based on
            preparation time, number of guests, dietary restrictions, and
            difficulty level.
          </li>
          <li>
            Save Your Favorites: Found a recipe you love? Save it to your
            favorites for quick access anytime.
          </li>
          <li>
            Powered by ChatGPT: Our advanced AI ensures you get unique and
            diverse recipe suggestions every time.
          </li>
        </ul>
        <h2 className="mb-8 text-4xl font-semibold text-cyan-950">
          Join us on a culinary adventure and never wonder what’s for dinner
          again with Dinner Generator!
        </h2>
      </div>
    </div>
  );
}
export default About;
