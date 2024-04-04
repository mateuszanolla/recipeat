import { useContext } from "react";
import { RecipeContext } from "./HeaderForm2";

export const HeaderFormIngredient2 = () => {
  const { oneIngredient, setOneIngredient, ingredients, setIngredients } =
    useContext(RecipeContext);

  const addOneMoreIngredient = (e) => {
    e.preventDefault();
    const newIngredientAdded = [
      ...ingredients,
      { ingredient: oneIngredient, id: new Date().toISOString() },
    ];
    setIngredients(newIngredientAdded);
    setOneIngredient("");
  };

  const deleteEntry = (e, item) => {
    e.preventDefault();
    setIngredients(ingredients.filter((i) => i.id !== item));
  };

  return (
    <>
      <div>
        <input
          className="ingredientPrepareInput"
          type="text"
          id="ingredient"
          placeholder="Insert an ingredient"
          onChange={(e) => setOneIngredient(e.target.value)}
          value={oneIngredient}
        />
        <button
          className="addDeleteButon"
          onClick={(e) => addOneMoreIngredient(e, oneIngredient)}
        >
          +
        </button>
      </div>
      <ul>
        {ingredients.map((i) => {
          return (
            <div className="listIngredientsPrepare" key={i.id}>
              <li>{i.ingredient}</li>
              <button
                className="addDeleteButon"
                onClick={(e) => deleteEntry(e, i.id)}
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
