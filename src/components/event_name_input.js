import React from 'react';

const EventNameInput = (props) => {
  return (
    <input
      type="text"
      id="eventName"
      value={props.eventName}
      onChange={props.handleChange}
    />
  )
};

export default EventNameInput;
