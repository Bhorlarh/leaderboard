import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ topThree }) => (
    <div className="card-list">
    {
      topThree.map((user, index) => (
        <Card
          name={user.name}
          points={user.points}
          rank={index + 1}
          key={index}
        />
      ))
    }
    </div>
  );

export default CardList;
