import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async (username) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    setUsers(res.data);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search getUsers={getUsers} />
      </div>
    </div>
  );
};

export default App;
