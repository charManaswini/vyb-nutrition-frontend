# 🖥️ VYB Nutrition Frontend

## 🧠 Purpose
A ReactJS frontend that connects to the Flask API and displays nutritional breakdown for any Indian dish you input.

## ✨ Features
- Simple input form for dish name
- Beautiful side-by-side layout of:
  - Nutrition per 200ml katori
  - Ingredients with household quantities and match confidence bars
- Colored bars show ingredient match confidence:
  - Green (90%+), Yellow (75–89%), Red (below 75%)
- Responsive and styled layout

## 📁 Key Files
- `App.js` — main logic for API call and state
- `components/NutritionCard.js` — handles rendering of output
- `components/NutritionCard.css` — contains all stylings for layout and confidence bars

## 🔧 Tech Used
- ReactJS
- Axios for API call
- Netlify for deployment

## 🌍 Deployment
Frontend is live and hosted at:  
**👉 [https://your-netlify-site.netlify.app](https://your-netlify-site.netlify.app)**

You can enter dishes like:
```
Paneer Butter Masala  
Rajma  
Chole  
Dal Tadka  
Vegetable Fry  
```
to test it out!

---

> 👩‍🍳 Nutrition simplified. For everyone. Powered by AI and household data.