import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center lg:translate-y-1/4">
      <div className="flex max-w-5xl flex-col items-center justify-center p-4 text-center">
        <h1 className="mb-8 text-6xl font-bold text-pallette-10">
          Welcome to the Dinner Generator
        </h1>

        <p className="mb-12 text-center text-3xl font-normal text-cyan-950">
          Struggling to figure out what&apos;s for dinner? Simply enter the
          ingredients you have in your fridge, and let our AI, powered by
          ChatGPT, suggest creative and delicious recipes tailored to your
          preferences. Save your favorite recipes and enjoy hassle-free cooking!
        </p>
        <Link to="/generate-recipe">
          <button className="animate-bounce rounded-lg border-2 border-pallette-50 bg-pallette-300 px-9 py-3 text-3xl font-normal text-pallette-500 shadow-md shadow-zinc-500 transition duration-200 hover:bg-pallette-50 hover:text-pallette-500">
            Get a recipe
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
