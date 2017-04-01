import React from 'react';

const EventDateInput = (props) => {
  return (
    <input
      type="date"
      id="eventDate"
      value={props.eventDate}
      onChange={props.handleChange}
    />
  )
};

export default EventDateInput;
