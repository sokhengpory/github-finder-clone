import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Users from './components/Users';
import Alert from './components/Alert';
import About from './components/About';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const getUsers = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const showAlert = (msg) => {
    setAlert({ msg: msg });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search getUsers={getUsers} showAlert={showAlert} />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
