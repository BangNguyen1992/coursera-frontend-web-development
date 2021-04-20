import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
};

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString('en-US', dateOptions);

const DishDetail = ({ dish }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const DishComments = ({ comments = [] }) => {
  return (
    <CardBody>
      <CardTitle tag="h4">Comments</CardTitle>
      {comments.map((item) => (
        <div key={item.id} className="mb-2">
          <CardText>{item.comment}</CardText>
          <p className="blockquote-footer">
            {item.author}, {formatDate(item.date)}
          </p>
        </div>
      ))}
    </CardBody>
  );
};

export default ({ dish }) => {
  return (
    <>
      <DishDetail dish={dish} />
      <DishComments comments={dish.comments} />
    </>
  );
};

// rafce