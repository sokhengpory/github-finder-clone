import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fab fa-github" />
        Github Finder
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
