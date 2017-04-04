import React from 'react';

import styled from 'styled-components';
import EventForm from '../containers/event_form.js';
import Calendar from '../containers/calender.js';


  // justify-content: space-between;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:hsla(200, 5%, 76%, 0.4);
  height: 100vh;
`;
const App = () => (
  <Wrapper>
    <EventForm />
    <Calendar />
  </Wrapper>
);
export default App;
