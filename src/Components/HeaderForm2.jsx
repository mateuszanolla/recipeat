import { HeaderFormIngredient2 } from "./HeaderFormIngredient2";
import { HeaderFormStep } from "./HeaderFormStep";
import { createContext, useState } from "react";
export const RecipeContext = createContext();

export const HeaderForm2 = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [oneIngredient, setOneIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [allSteps, setAllSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    author: "",
    ingredients: [],
    steps: [],
  });

  const handleRecipe = (e) => {
    e.preventDefault();
    setNewRecipe({
      title: currentTitle,
      author: currentAuthor,
      ingredients: ingredients,
      steps: allSteps,
    });
    console.log(newRecipe);
  };

  return (
    <RecipeContext.Provider
      value={{
        currentTitle,
        setCurrentTitle,
        currentAuthor,
        setCurrentAuthor,
        oneIngredient,
        setOneIngredient,
        ingredients,
        setIngredients,
        steps,
        setSteps,
        newRecipe,
        allSteps,
        setAllSteps,
        currentStep,
        setCurrentStep,
      }}
    >
      <header className="formComponent">
          <form className="formArea">
            <div className="addNewRecipe">
              <h2>Add a new recipe:</h2>
              <div className="addNewRecipeInputs">
                <input
                  className="titleInput"
                  type="text"
                  id="title"
                  placeholder="Insert Title"
                  value={currentTitle}
                  onChange={(e) => setCurrentTitle(e.target.value)}
                />
                <input
                className="authorInput"
                  type="text"
                  id="author"
                  placeholder="Author"
                  value={currentAuthor}
                  onChange={(e) => setCurrentAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="ingredientsPrepare">
              <h3>Ingredients:</h3>
              <HeaderFormIngredient2
                handleIngredient={(e) => setOneIngredient(e.target.value)}
              />
            </div>
            <div className="ingredientsPrepare">
              <h3>Prepare mode:</h3>
              <HeaderFormStep />
            </div>

            <button className="submitButton" onClick={(e) => handleRecipe(e)}>
              Cook!
            </button>
          </form>
     
      </header>
    </RecipeContext.Provider>
  );
};
