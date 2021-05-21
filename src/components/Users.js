import { useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import Spinner from './Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
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

export default Users;
