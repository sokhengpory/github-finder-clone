import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Github Users
  const getUsers = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );

    dispatch({
      types: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User Github Data
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      types: GET_USER,
      payload: res.data,
    });
  };

  // Get User Repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({
      types: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Users
  const clearUser = () => {
    dispatch({
      types: CLEAR_USERS,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ types: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        getUsers,
        getUser,
        getUserRepos,
        clearUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
