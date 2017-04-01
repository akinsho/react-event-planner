import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import EventNameInput from '../components/event_name_input.js';
import EventDateInput from '../components/event_date_input.js';

const Form = styled.form`
  border: solid 1px black;
`;


class EventsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventDate: ''
    };
    this.handleEventInput = this.handleEventInput.bind(this);
  }

  handleEventInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <Form>
        <EventNameInput
          eventName={this.state.eventName}
          handleChange={this.handleEventInput}
        />
        <EventDateInput
          eventDate={this.state.eventDate}
          handleChange={this.handleEventInput}
        />
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(EventsForm);
