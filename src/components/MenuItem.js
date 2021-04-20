import React from 'react';
import { Media } from 'reactstrap';

const MenuItem = ({ dish }) => {
  return (
    <div>
      <div key={dish.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
            <Media object src={dish.image} alt={dish.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            <p>{dish.description}</p>
          </Media>
        </Media>
      </div>
    </div>
  );
};

export default MenuItem;
