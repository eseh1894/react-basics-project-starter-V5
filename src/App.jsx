import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import RecipePage from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </div>
  );
};
