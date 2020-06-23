import React from 'react';
import './RowItem.css';

const RowItem = ({ rank, name, points }) => {
  return (
    <li className="row-item">
      <div class="row-item_start">
        <div className="row-item_rank">
          <span className="row-item_rank-text">{rank}</span>
        </div>
        <span className="row-item_span-name">{name}</span>
      </div>
      <div class="row-item_end">
        <span className="">share</span>
        <span className="">{`${points} points`}</span>
      </div>
    </li>
  );
};

export default RowItem;
