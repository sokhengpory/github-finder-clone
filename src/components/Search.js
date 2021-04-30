import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ getUsers, showAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please input username');
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
          className="btn btn-light btn-block"
        />
      </form>
    </div>
  );
};

Search.protoType = {
  getUsers: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Search;
