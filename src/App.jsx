import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import RecipesPage from "./pages/Recipes/RecipesPage.jsx";
import Recipe from "./pages/Recipe.jsx";
import GenerateRecipe from "./pages/GenerateRecipe/GenerateRecipePage.jsx";
import AppLayout from "./components/layout/AppLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/generate-recipe" element={<GenerateRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:receipeId" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
