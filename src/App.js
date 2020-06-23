import React from 'react';
import CardList from './components/CardList/CardList.js';
import RankingTable from './components/RankingTable/RankingTable.js';
import users from './users1.json';
import './App.css';

function App() {
  const sortedUsers = users.sort((a, b) => (b.points - a.points));

  return (
    <div className="App">
      <h2 class="title">Leaderboard</h2>
      <CardList topThree={sortedUsers.slice(0, 3)}/>
      <RankingTable remainingUsers={sortedUsers.slice(3)}/>
    </div>
  );
}

export default App;
