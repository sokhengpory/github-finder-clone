import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search getUsers={getUsers} />
        <Users users={users} loading={loading} />
      </div>
    </div>
  );
};

export default App;
