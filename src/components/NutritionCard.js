import React from 'react';

function NutritionCard({ data }) {
  if (data.error) {
    return <p className="error">{data.error}</p>;
  }

  return (
    <div className="card">
      <h2>{data.dish_type}</h2>
      <h3>Nutrition per 200ml katori</h3>
      <ul>
        <li>Calories: {data.estimated_nutrition_per_200ml_katori.calories} kcal</li>
        <li>Protein: {data.estimated_nutrition_per_200ml_katori.protein} g</li>
        <li>Carbs: {data.estimated_nutrition_per_200ml_katori.carbs} g</li>
        <li>Fat: {data.estimated_nutrition_per_200ml_katori.fat} g</li>
      </ul>
      <h4>Ingredients Used:</h4>
      <ul>
        {data.ingredients_used.map((item, i) => (
          <li key={i}>
            {item.original} → {item.ingredient} ({item.quantity}) — Confidence: {item.match_confidence}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionCard;
