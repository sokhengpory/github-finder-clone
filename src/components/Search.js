import React, { useState } from 'react';

const Search = ({ getUsers }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    getUsers(text);
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

export default Search;
