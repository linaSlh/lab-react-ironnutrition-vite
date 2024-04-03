import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";



function App() {

  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter(food => food.id !== id);  
    setFoods(updatedFoods); }

    const addFoodToList = (newFood) => {
      const newFoods = [...foods, newFood]; // Create a new array with the existing foods plus the new food item
      setFoods(newFoods); // Update the state with the new array of foods
    };




  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFoodToList={addFoodToList} /> 

  
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;