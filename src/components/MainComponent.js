import { useState } from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

import { DISHES } from '../shared/dishes';

const Main = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Header />

      <Menu dishes={dishes} onDishSelect={setSelectedDish} />
      <DishDetail dish={selectedDish} />

      <Footer />
    </div>
  );
};

export default Main;
