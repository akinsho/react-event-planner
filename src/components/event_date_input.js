import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 60%;
  background: grey;
  height: 2em;
`;
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
