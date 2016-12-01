import React from 'react';

/**
 * Presentation component for showing date-time.
 *
 * @param {Object} props
 * @param {Date} props.date
 * @return {XML}
 * @constructor
 */
const DateTime = (props) => {
  return (
    <span className="datetime">{props.date.toLocaleString()}</span>
  );
};

DateTime.propTypes = {
  date: React.PropTypes.instanceOf(Date).isRequired
};

export default DateTime;
