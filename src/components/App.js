import React from 'react';
import styled, {injectGlobal} from 'styled-components';

import EventForm from '../containers/event_form.js';
import Calendar from '../containers/calender.js';

injectGlobal`
body {
  margin: 0;
  padding: 0;
}

`;

const Wrapper = styled.div`
  font-family: 'Helvitica', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const App = () => (
  <Wrapper>
    <EventForm />
    <Calendar />
  </Wrapper>
);
export default App;
