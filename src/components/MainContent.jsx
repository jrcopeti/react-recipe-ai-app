import React from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

const MainContent = ({ recipes, onGenerateRecipes }) => {
  return (
    <main className="bg-pallette-400 ${isSidebarOpen ? min-h-[92vh] p-4 duration-300 ease-in-out">
      <RecipeForm onGenerateRecipes={onGenerateRecipes} />
      <RecipeList recipes={recipes} />
    </main>
  );
};

export default MainContent;
