import { useContext, useState } from "react";
import { RecipeContext } from "../App";
import { HeaderFormIngredient2 } from "./HeaderFormIngredient2";
import { HeaderFormStep } from "./HeaderFormStep";

export const HeaderForm = () => {
  const {
    currentTitle,
    setCurrentTitle,
    currentAuthor,
    setCurrentAuthor,
    setOneIngredient,
    handleRecipe,
    formHidden,
    setFormHidden,
  } = useContext(RecipeContext);

  const hideForm = (e) => {
    e.preventDefault();
    setFormHidden(!formHidden);
  };
  
  return (
    <header
      className={
        formHidden ? "formComponent formComponentHide" : "formComponent"
      }
    >
      <form className="formArea">
        <div className="addNewRecipe">
          <h2>Add a new recipe:</h2>

          <div className="addNewRecipeInputs ">
            <div className="form-mandatory">
              <input
                className="titleInput"
                type="text"
                id="title"
                placeholder="Insert Title"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
              />
            </div>
            <div>
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
      <button onClick={(e) => hideForm(e)} className="span-add">
        Add
      </button>
    </header>
  );
};
