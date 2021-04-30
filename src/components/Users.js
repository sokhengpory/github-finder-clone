import React from 'react';
import Spinner from './Spinner';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  const displayStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
  };

  console.log(loading);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={displayStyle}>
        {users.map((user) => {
          return <UserItem user={user} key={user.id} />;
        })}
      </div>
    );
  }
};

export default Users;
