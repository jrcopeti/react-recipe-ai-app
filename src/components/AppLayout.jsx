import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import FavoriteRecipes from "./FavoriteRecipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleGenerateRecipes = (newRecipes) => {
    setRecipes(newRecipes);
  };

  const handleSaveFavorite = (recipe) => {
    setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipe]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="bg-pallette-100 flex-grow p-6 text-cyan-950">
          <MainContent
            recipes={recipes}
            onGenerateRecipes={handleGenerateRecipes}
            onSaveFavorite={handleSaveFavorite}
          />
          <FavoriteRecipes favoriteRecipes={favoriteRecipes} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
