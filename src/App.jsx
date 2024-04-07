import { HeaderForm } from "./Components/HeaderForm";
import { createContext, useState } from "react";
import { Main } from "./Components/Main";
export const RecipeContext = createContext();

export const App = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [oneIngredient, setOneIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [allSteps, setAllSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [evaluation, setEvaluation] = useState(5);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    author: "",
    ingredients: [],
    steps: [],
    evaluation: 3,
    id: "",
    isComplete: true,
  });
  const [formHidden, setFormHidden] = useState(true);
  const [recipesList, setRecipesList] = useState([]);

  const handleRecipe = (e) => {
    e.preventDefault();
    if (
      oneIngredient.length === 0 &&
      currentStep.length === 0 &&
      currentTitle.length === 0 &&
      currentAuthor.length === 0
    ) {
      setNewRecipe({ ...newRecipe, isComplete: false });
      setFormHidden(false);
      return;
    }
    const newIngredientAdded = [
      ...ingredients,
      { ingredient: oneIngredient, id: new Date().toISOString() },
    ];
    setIngredients(newIngredientAdded);
    const newAllSteps = [
      ...allSteps,
      { step: currentStep, id: new Date().toISOString() },
    ];
    const newRecipeObject = {
      title: currentTitle ? currentTitle : "Mysterious Recipe",
      author: currentAuthor ? currentAuthor : "Unknown",
      ingredients: oneIngredient === "" ? ingredients : newIngredientAdded,
      steps: currentStep !== "" ? newAllSteps : allSteps,
      id: new Date(),
      evaluation: 3,
    };
    setRecipesList([...recipesList, newRecipeObject]);
    setIngredients([]);
    setAllSteps([]);
    setOneIngredient("");
    setCurrentStep("");
    setCurrentAuthor("");
    setCurrentTitle("");
    setNewRecipe({ ...newRecipe, isComplete: true });
    setFormHidden(true);
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
        setNewRecipe,
        handleRecipe,
        recipesList,
        setRecipesList,
        formHidden,
        setFormHidden,
        evaluation,
        setEvaluation,
      }}
    >
      <section className="app">
        <HeaderForm />
        <Main />
      </section>
    </RecipeContext.Provider>
  );
};
