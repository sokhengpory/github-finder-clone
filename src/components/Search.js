import React from 'react';

const Search = () => {
  return (
    <div>
      <form className="form">
        <input type="text" name="text" placeholder="Enter username" />
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
