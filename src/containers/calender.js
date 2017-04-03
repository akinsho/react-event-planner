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
`;

const Thead = styled.thead`
  background:hsl(206, 100%, 31%);
`;

const Tbody = styled.tbody`
  border: solid 1px tomato;
`;

// border: solid 1px tomato;
const Tr = styled.tr`
`;

const Th = styled.th`
`;

const Td = styled.td`
  padding: 1rem;
  background:hsla(200, 5%, 76%, 0.4);
  box-shadow: 0 1px 2px black;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

class Calender extends Component {

  // {this.props.events.map(event => (
  //   <EventItem key={uuid()} {...event}/>
  // ))}
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
                        <Ul>{ eventsToday.map(event => <EventItem key={uuid()}>{event.name}</EventItem>) }</Ul>
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
