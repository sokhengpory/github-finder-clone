import React, { useContext, useState } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { users, getUsers, clearUser } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please input username');
    } else {
      getUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter username"
          onChange={onChange}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 ? (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Search;
