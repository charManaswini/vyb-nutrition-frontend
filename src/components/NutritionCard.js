import React from 'react';
import './NutritionCard.css';


function NutritionCard({ data }) {
  if (data.error) {
    return <p className="error">{data.error}</p>;
  }

  return (
  <div className="card-container">
    <div className="nutrition-box">
      <h2>{data.dish_type}</h2>
      <h3>Nutrition per 200ml katori</h3>
      <ul>
        <li>Calories: {data.estimated_nutrition_per_200ml_katori.calories} kcal</li>
        <li>Protein: {data.estimated_nutrition_per_200ml_katori.protein} g</li>
        <li>Carbs: {data.estimated_nutrition_per_200ml_katori.carbs} g</li>
        <li>Fat: {data.estimated_nutrition_per_200ml_katori.fat} g</li>
      </ul>
    </div>

    <div className="ingredient-box">
      <h3>Ingredients Used:</h3>
      <ul>
        {data.ingredients_used.map((item, index) => (
          <li key={index}>
            <strong>{item.original}</strong> → {item.ingredient} ({item.quantity}) — Confidence: {item.match_confidence}%
            <div className="confidence-bar">
              <div className="confidence-fill" style={{
                width: `${item.match_confidence}%`,
                backgroundColor: item.match_confidence > 90 ? '#4CAF50' : item.match_confidence > 80 ? '#FFC107' : '#F44336'
              }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default NutritionCard;
