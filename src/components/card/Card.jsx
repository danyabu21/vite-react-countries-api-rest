import React from 'react';
import './Card.scss';

const Card = ({ name, image, population, region, capital, ...props }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="details mb-3">
          <p className="card-text fw-bold">
            Population:{' '}
            <span className="fw-normal">
              {population.toLocaleString('en-US')}
            </span>
          </p>
          <p className="card-text fw-bold">
            Region: <span className="fw-normal">{region}</span>
          </p>
          <p className="card-text fw-bold">
            Capital: <span className="fw-normal">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
