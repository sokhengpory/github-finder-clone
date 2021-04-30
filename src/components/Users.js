import PropTypes from 'prop-types';
import Spinner from './Spinner';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  const displayStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
  };

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

Users.protoType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
