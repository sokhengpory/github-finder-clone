import React from 'react';

const UserItem = (props) => {
  // console.log(avatar_url, login);
  console.log(props);
  const { avatar_url, login, html_url } = props.user;
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

export default UserItem;
