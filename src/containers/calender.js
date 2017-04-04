import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import daysInCurrentMonth from '../lib/date_helpers.js';
import { EventItem } from '../components/event_item.js';

const Table = styled.table`
  margin-top: 1rem;
  width: 80vw;
  height: auto;
  border-collapse:collapse;
  box-shadow: 0 1px 2px black;
`;

const Thead = styled.thead`
  background:#009688;
  font-family:'Montserrat', sans-serif;
`;

const Tbody = styled.tbody`
  border: solid 1px tomato;
`;

const Tr = styled.tr`
`;

const Th = styled.th`
`;

const Td = styled.td`
  background: white;
  font-family:'Montserrat', sans-serif;
  font-size: 1.2rem;
  border: 0.3px solid rgba(0,0,0,0.1);
  padding: 1rem;
  text-align:center;
`;

const Ul = styled.ul`
  width: 100%;
  heigh: 80%;
  box-shadow: 0px 1px 2px grey;
  list-style-type: none;
  padding: 0;
  border: 0.1px solid black;
`;

class Calender extends Component {

  render() {
    console.log(this.props.events);
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const numberOfWeeks = [0, 1, 2, 3, 4];
    return (
      <Table>
        <Thead>
          <Tr>
            {daysOfWeek.map(day => (
              <Th key={uuid()}>{day}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {numberOfWeeks.map((week, weekIdx) => (
            <Tr key={uuid()}>
              {
                daysOfWeek.map((day, dayIdx) => {

                  let dayOfMonth = (dayIdx + 1) + weekIdx * 7;
                  let eventsToday = this.props.events.filter(event => {
                    return Number(event.date.slice(-2)) === dayOfMonth;
                  });
                  return (
                    <Td key={uuid()}>
                      {dayOfMonth > daysInCurrentMonth ? null : dayOfMonth}
                      {!eventsToday[0]?
                        null:
                        <Ul>Events: { eventsToday.map(event => <EventItem key={uuid()}>{event.name}</EventItem>) }</Ul>
                      }
                    </Td>
                  );
                })
              }
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Calender);
