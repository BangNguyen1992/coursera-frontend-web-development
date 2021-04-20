import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import DishtailComponent from './DishdetailComponent';

const Menu = (props) => {
  const [dishes, setDishes] = useState(props.dishes);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="container">
      <div className="row">
        {dishes.map((dish) => (
          <MenuItem key={dish.id} dish={dish} onDishSelect={setSelectedDish} />
        ))}
      </div>
      <div className="row">
        {!selectedDish ? (
          <div></div>
        ) : (
          <DishtailComponent dish={selectedDish} />
        )}
      </div>
    </div>
  );
};

export default Menu;
