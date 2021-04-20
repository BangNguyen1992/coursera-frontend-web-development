import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import MenuItem from './MenuItem';



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
        <div className="col-12 col-md-5 m-1">
          {!selectedDish ? (
            <div></div>
          ) : (
            <Card>
              <CardImg top src={selectedDish.image} alt={selectedDish.name} />
              <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
