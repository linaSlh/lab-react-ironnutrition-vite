
function FoodBox(props) {
    const { food,deleteFood } = props;
  
    return (
      <div className="FoodBox">
        <p>NAME</p> 
        <img src={food.image} alt={food.name}  />  
        <p>Name: {food.name}</p> 
        <p>Calories: {food.calories} CALORIES</p> 
        <p>Servings: {food.servings} SERVINGS</p> 
  
        <p>
          <b>Total Calories: {food.servings * food.calories} kcal</b> 
        </p>
  
        <button onClick={() => deleteFood(food.id)}>Delete</button>
      </div>
    );
  }

  export default FoodBox; 