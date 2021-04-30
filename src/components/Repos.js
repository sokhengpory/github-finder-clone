import React, { Fragment } from 'react';
import Repo from './Repo';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return (
    <Fragment>
      {repos.map((repo) => {
        return <Repo repo={repo} key={repo.id} />;
      })}
    </Fragment>
  );
};

Repos.protoTpye = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
