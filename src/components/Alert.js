import { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className="btn btn-light btn-block">
        <h3 style={{ fontWeight: 'lighter' }}>{alert}</h3>
      </div>
    )
  );
};

export default Alert;
