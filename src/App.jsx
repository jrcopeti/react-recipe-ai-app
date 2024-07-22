
import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Recipes from "./pages/Recipes.jsx";
import Recipe from "./pages/Recipe.jsx";
import GenerateRecipe from "./pages/GenerateRecipe.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-recipe" element={<GenerateRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:receipeId" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
