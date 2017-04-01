import React from 'react';
import Input from './input.js';

const EventNameInput = (props) => {
  return (
    <Input
      type="text"
      id="eventName"
      value={props.eventName}
      onChange={props.handleChange}
    />
  )
};

export default EventNameInput;
