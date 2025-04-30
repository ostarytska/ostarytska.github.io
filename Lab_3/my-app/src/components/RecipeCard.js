import React from 'react';
function RecipeCard({ title, calories, image, ingredients, instructions }) {
    return (
      <div className="recipe">
        <img src={image} alt={title} className="recipe-img" />
        <h3>{title}</h3>
        <p><strong>Калорії:</strong> {calories}</p>
        <p><strong>Інгредієнти:</strong></p>
        <ul>
          {ingredients.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <p><strong>Інструкція:</strong></p>
        <ol>
          {instructions.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>
    );
  }
  
  export default RecipeCard;
  