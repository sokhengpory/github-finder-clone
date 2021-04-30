import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div>
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          style={{ width: '60px' }}
          className="round-img"
        />
        <h2>{login}</h2>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.protoType = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
