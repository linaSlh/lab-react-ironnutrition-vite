import React, { useState } from 'react';

function AddFoodForm({ addFoodToList }) {
  const [food, setFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodToList(food);
    setFood({ name: '', image: '', calories: 0, servings: 0 }); // Reset form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={food.name} onChange={handleChange} />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" name="image" value={food.image} onChange={handleChange} />
      </div>
      <div>
        <label>Calories:</label>
        <input type="number" name="calories" value={food.calories} onChange={handleChange} />
      </div>
      <div>
        <label>Servings:</label>
        <input type="number" name="servings" value={food.servings} onChange={handleChange} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;