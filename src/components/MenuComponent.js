import MenuItem from './MenuItem';

const Menu = ({ dishes, onDishSelect }) => {
  return (
    <div className="container">
      <div className="row">
        {dishes.map((dish) => (
          <MenuItem key={dish.id} dish={dish} onDishSelect={onDishSelect} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
