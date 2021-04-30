import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  const { avatar_url, login, html_url } = user;
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
          <a href={html_url} className="btn btn-dark">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.protoType = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
