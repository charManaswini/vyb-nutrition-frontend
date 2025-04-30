import React, { useState } from 'react';
import axios from 'axios';
import NutritionCard from './components/NutritionCard';
import './App.css';

function App() {
  const [dish, setDish] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setData(null);
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL, { dish });
      setData(response.data);
    } catch (error) {
      setData({ error: 'Could not fetch data' });
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>VYB Nutrition Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter dish name"
          value={dish}
          onChange={e => setDish(e.target.value)}
        />
        <button type="submit">Analyze</button>
      </form>

      {loading && <p>Loading...</p>}
      {data && <NutritionCard data={data} />}
    </div>
  );
}

export default App;
