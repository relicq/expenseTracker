import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div>
      <h1>Personal Finance Tracker</h1>
      <form>
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Category" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}


export default App;
