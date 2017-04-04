import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
  font-size: 1rem;
`;
export const EventItem = (props) => (
  <Li>{props.children}</Li>
);
