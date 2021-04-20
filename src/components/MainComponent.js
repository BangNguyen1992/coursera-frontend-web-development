import { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

import { DISHES } from '../shared/dishes';

const Main = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onDishSelect={setSelectedDish} />

      <DishDetail dish={selectedDish} />
    </div>
  );
};

export default Main;
