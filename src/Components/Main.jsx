import { Card } from "./Card";
import { useContext } from "react";
import { RecipeContext } from "../App";

export const Main = () => {
  const { recipesList, setRecipesList } = useContext(RecipeContext);

  const deleteCard = (e, id) => {
    setRecipesList(recipesList.filter((i) => i.id !== id))
  }

  return (
    <>
      <h2 className="card-title">Recipes:</h2>
      <div className="recipesArea">

      {recipesList.length === 0 ? <p>No recipes yet.</p> 
      :
      recipesList.map((item, index) => (
        <Card key={index} item={item} deleteCard={deleteCard} />
      ))}
  
       
      </div>
    </>
  );
};
