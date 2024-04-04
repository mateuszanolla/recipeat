import { RandomRecipe } from "./Random";
export const Main = () => {
  return (
    <>
      <h2 className="card-title">Recipes:</h2>
      <div className="recipesArea">
        {/* < RandomRecipe /> */}
        <div className="card-container">
          <h3 className="card-recipe-title">Sushi</h3>
          <div className="evaluateAndAuthor">

          <div className="card-evaluate">
            <button className="addDeleteButon">💩 </button>
            <p> ★★★☆☆ </p>
            <button className="addDeleteButon"> 😍</button>
          </div>
          <p className="card-recipe-author">Mateus Zanolla</p>
          </div>
          <div className="card-section">
            <h4 className="card-section-header">Ingredients:</h4>
            <ul className="card-section-list">
              <li>2 pieces of salmon</li>
              <li>Shari</li>
              <li>Algae</li>
              <li>Cucumber</li>
            </ul>
          </div>
          <div className="card-section">
            <h4 className="card-section-header">Steps:</h4>
            <ul className="card-section-list">
              <li>Make the shari</li>
              <li>Put everything in the algae</li>
              <li>Roll it</li>
              <li>Eat</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
