import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';

import { DISHES } from '../shared/dishes';

const Main = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          exact
          path="/menu"
          component={() => (
            <Menu dishes={dishes} onDishSelect={setSelectedDish} />
          )}
        />
        <Redirect to="/home" />
      </Switch>

      <DishDetail dish={selectedDish} />

      <Footer />
    </div>
  );
};

export default Main;
