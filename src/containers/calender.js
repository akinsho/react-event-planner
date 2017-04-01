import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EventItem } from '../components/event_item.js';

class Calender extends Component {

  render() {
    console.log(this.props.events[0]);
    return (
      <ul>
        {this.props.events.map(event  => (
          <EventItem {...event}/>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Calender);
