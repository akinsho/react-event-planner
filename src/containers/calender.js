import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import daysInCurrentMonth from '../lib/date_helpers.js';
// import { EventItem } from '../components/event_item.js';
// import uuid from 'uuid';

const Table = styled.table`
  border: solid 1px tomato;
`;

const Thead = styled.thead`
  border: solid 1px tomato;
`;

const Tbody = styled.tbody`
  border: solid 1px tomato;
`;

const Tr = styled.tr`
  border: solid 1px tomato;
`;

const Th = styled.th`
  border: solid 1px tomato;
`;

const Td = styled.td`
  border: solid 1px tomato;
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
                        <ul>{ eventsToday.map(event => <li key={uuid()}>{event.name}</li>) }</ul>
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
