import { useContext } from "react";
import { RecipeContext } from "../App";

export const HeaderFormStep = () => {
  const { allSteps, setAllSteps, currentStep, setCurrentStep } =
    useContext(RecipeContext);

  const addNewStep = (e, step) => {
    e.preventDefault();
    const newAllSteps = [
      ...allSteps,
      { step: step, id: new Date().toISOString() },
    ];
    setAllSteps(newAllSteps);
    setCurrentStep("");
  };

  const deleteStep = (e, id) => {
    e.preventDefault();
    const stepsFiltered = allSteps.filter((i) => i.id !== id);
    setAllSteps(stepsFiltered);
  };

  return (
    <>
      <div className="form-mandatory">
        <input
          className="ingredientPrepareInput"
          type="text"
          id="step"
          placeholder="Insert a step"
          value={currentStep}
          onChange={(e) => setCurrentStep(e.target.value)}
        />
        <button
          className="addDeleteButon"
          onClick={(e) => addNewStep(e, currentStep)}
        >
          +
        </button>
      </div>
      <ul>
        {allSteps.map((i) => {
          return (
            <div className="listIngredientsPrepare" key={i.id}>
              <li>{i.step}</li>
              <button
                className="addDeleteButon"
                onClick={(e) => deleteStep(e, i.id)}
              >
                🗑️
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};
