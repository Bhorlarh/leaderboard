import React from 'react';
import './Card.css';

const Card = ({ name, points, rank}) => {
  return (
    <div className={`card card_${rank}`}>
      <div></div>
      <div className="card_rank">{rank}</div>
      <span className="card_span card_span-name">{name}</span>
      <span className="card_span card_span-points">{`${points} points`}</span>
    </div>
  )
};

export default Card;
