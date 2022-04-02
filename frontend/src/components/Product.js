import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card
      className='my-3 p-3 rounded col'
      style={{
        height: 400,
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{ maxHeight: 240 }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <div style={{ position: 'relative', bottom: 0 }}>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
