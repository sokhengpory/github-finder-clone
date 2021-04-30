import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UserRepo = ({ repo }) => {
  return (
    <Fragment>
      <div className="card">
        <h3>
          <a href={repo.html_url} target="blank">
            {repo.name}
          </a>
        </h3>
      </div>
    </Fragment>
  );
};

UserRepo.protoType = {
  repo: PropTypes.object.isRequired,
};

export default UserRepo;
