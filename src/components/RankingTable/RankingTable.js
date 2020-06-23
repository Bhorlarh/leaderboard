import React from 'react';
import RowItem from '../RowItem/RowItem';
import './RankingTable.css';

const RankingTable = ({ remainingUsers}) => {
  return (
    <ul className="ranking-table">
      {
        remainingUsers.map((user, index) => (
          <RowItem
            name={user.name}
            points={user.points}
            rank={index + 1}
            key={index}
          />
        ))
      }
    </ul>
  )
};

export default RankingTable;
