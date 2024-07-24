import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="m-[130px] flex items-center justify-center">
      <div className="max-w-5xl p-4 text-center">
        <h1 className="mb-8 text-6xl font-normal text-pallette-50">
          Welcome to the Dinner Generator
        </h1>
        <p className="mb-12 text-balance text-2xl font-semibold text-pallette-50">
          Struggling to figure out what's for dinner? Simply enter the
          ingredients you have in your fridge, and let our AI, powered by
          ChatGPT, suggest creative and delicious recipes tailored to your
          preferences. Save your favorite recipes and enjoy hassle-free cooking!
        </p>
        <Link to="/recipes">
          <button className="rounded-lg border-2 border-pallette-50 bg-pallette-300 px-9 py-3 text-2xl font-normal text-pallette-500 transition duration-200 hover:bg-pallette-50 hover:text-pallette-500">
            Get a recipe
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
