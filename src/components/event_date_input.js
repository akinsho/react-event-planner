import React from 'react';

const EventDateInput = (props) => {
  return (
    <input
      type="date"
      id="eventDate"
      value={props.eventName}
      onChange={props.handleChange}
    />
  )
};

export default EventDateInput;
