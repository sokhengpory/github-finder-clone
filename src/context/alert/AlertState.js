import { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMVOE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg) => {
    dispatch({
      types: SET_ALERT,
      payload: msg,
    });
    setTimeout(() => {
      dispatch({ types: REMVOE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
