import React from 'react';
import Input from './input.js';

const EventDateInput = (props) => {
  return (
    <Input
      type="date"
      id="eventDate"
      value={props.eventDate}
      onChange={props.handleChange}
    />
  )
};

export default EventDateInput;
