import React, { useEffect } from "react";
import { useContext } from "react";
import { RecipeContext } from "../App";

export const Card = ({ item, deleteCard }) => {
  const { recipesList, setEvaluation } =
    useContext(RecipeContext);

  function increasePoints(id) {
    recipesList.forEach((item) => {
      if (item.id === id) {
        if (item.evaluation < 5) {
          setEvaluation((item.evaluation += 1));
        }
      }
    });
  }
  function decreasePoints(id) {
    recipesList.forEach((item) => {
      if (item.id === id) {
        if (item.evaluation > 0) {
          setEvaluation((item.evaluation = item.evaluation - 1));
        }
      }
      
    });
  }
  useEffect(() => {}, [setEvaluation]);
  return (
    <div className="card-container">
      <h3 className="card-recipe-title">{item.title}</h3>
      <div className="evaluateAndAuthor">
        <div className="card-evaluate">
          <button
            onClick={() => decreasePoints(item.id)}
            className="addDeleteButon"
          >
            💩{" "}
          </button>
          <p>
            {" "}
            {"★".repeat(item.evaluation)}
            {"☆".repeat(5 - item.evaluation)}{" "}
          </p>
          <button
            onClick={() => increasePoints(item.id)}
            className="addDeleteButon"
          >
            {" "}
            😍
          </button>
        </div>
        <p className="card-recipe-author">{item.author}</p>
      </div>
      <div className="card-section">
        <h4 className="card-section-header">Ingredients:</h4>
        <ul className="card-section-list">
          {item.ingredients.map((i) => (
            <li>{i.ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="card-section">
        <h4 className="card-section-header">Steps:</h4>
        <ul className="card-section-list">
          {item.steps.map((i) => (
            <li>{i.step}</li>
          ))}
        </ul>
      </div>
      <button onClick={(e) => deleteCard(e, item.id)} className="addDeleteButon deleteCard">🗑️</button>
    </div>
  );
};
