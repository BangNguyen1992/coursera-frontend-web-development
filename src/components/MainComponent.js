import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

const Main = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/home"
          component={() => (
            <Home
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={promotions.filter((promo) => promo.featured)[0]}
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          )}
        />
        <Route
          exact
          path="/menu"
          component={() => (
            <Menu dishes={dishes} onDishSelect={setSelectedDish} />
          )}
        />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>

      <DishDetail dish={selectedDish} />

      <Footer />
    </div>
  );
};

export default Main;
