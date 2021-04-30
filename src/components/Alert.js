import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="btn btn-light btn-block">
        <h3>{alert.msg}</h3>
      </div>
    )
  );
};

Alert.protoType = {
  alert: PropTypes.object.isRequired,
};

export default Alert;
