import React from "react";
import "./NutritionCard.css"; // create this CSS file

const NutritionCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="card-container">
      <div className="nutrition-box">
        <h2>{data.dish_type}</h2>
        <h3>Nutrition per 200ml katori</h3>
        <ul>
          <li><strong>Calories:</strong> {data.estimated_nutrition_per_200ml_katori.calories} kcal</li>
          <li><strong>Protein:</strong> {data.estimated_nutrition_per_200ml_katori.protein} g</li>
          <li><strong>Carbs:</strong> {data.estimated_nutrition_per_200ml_katori.carbs} g</li>
          <li><strong>Fat:</strong> {data.estimated_nutrition_per_200ml_katori.fat} g</li>
        </ul>
      </div>

      <div className="ingredient-box">
        <h3>Ingredients Used:</h3>
        <ul>
          {data.ingredients_used.map((item, idx) => (
            <li key={idx}>
              <strong>{item.original}</strong> → {item.ingredient} <br />
              <em>{item.quantity}</em>
              <div className="confidence-bar">
                <div
                  className="confidence-fill"
                  style={{ width: `${item.match_confidence}%`, backgroundColor: getColor(item.match_confidence) }}
                ></div>
              </div>
              <small>Confidence: {item.match_confidence}%</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function getColor(score) {
  if (score >= 90) return "#4caf50";     // green
  if (score >= 75) return "#ffc107";     // yellow
  return "#f44336";                      // red
}

export default NutritionCard;
