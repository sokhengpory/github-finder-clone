import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
  const displayStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
  };

  console.log(users);

  return (
    <div style={displayStyle}>
      {users.map((user) => {
        return <UserItem user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
