import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calender extends Component {

  render() {
    console.log(this.props.events);
    return (
      <div>
        { this.props.events[0].date }
        </div>
        );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Calender);
