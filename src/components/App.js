import React from 'react';
import styled from 'styled-components';

import EventForm from '../containers/event_form.js';
import Calendar from '../containers/calender.js';

const Wrapper = styled.div`
  height: 100%;
  border: solid 1px red;
`;


const App = () => (
  <Wrapper>
    <EventForm />
    <Calendar />
  </Wrapper>
);
export default App;
