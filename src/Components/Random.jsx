import { useState, useEffect } from "react";
import Axios from "axios";
export const RandomRecipe = () => {
  const [randomRecipe, setRandomRecipe] = useState({
    title: "",
    category: "",
    origin: "",
    prepare: "",
  });

  const fetchRecipe = () => {
      Axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then(
        (res) => {
          const data = res.data.meals[0];
          const fetchedRecipe = {
            title: data.strMeal || "",
            category: data.strCategory || "",
            origin: data.strArea || "",
            prepare: data.strInstructions || "",
          };
          setRandomRecipe(fetchedRecipe);
        }
      );
  }

  useEffect(() => fetchRecipe(), []);

  return (
    <div>
      <button onClick={fetchRecipe}>Give me an idea! </button>
      <details>
        <summary>
          {randomRecipe.title} <em> - {randomRecipe.category} ({randomRecipe.origin})
          </em>
        </summary>
          <p>{randomRecipe.prepare}</p>
      </details>
    </div>
  );
};
