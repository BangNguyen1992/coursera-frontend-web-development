import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, onDishSelect }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card onClick={() => onDishSelect(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
