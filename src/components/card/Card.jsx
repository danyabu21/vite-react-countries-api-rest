import React from 'react';
import './Card.scss';

const Card = ({ name, image, population, region, capital, ...props }) => {
  return (
    <div className="card mx-2">
      <img src={image} className="card-img-top shadow-sm" alt={name} />
      <div className="card-body d-flex flex-column align-items-start">
        <h5 className="card-title d-block">{name}</h5>
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
