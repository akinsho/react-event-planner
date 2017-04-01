import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import EventNameInput from '../components/event_name_input.js';
import EventDateInput from '../components/event_date_input.js';
import Button from '../components/button.js';
import * as actions from '../actions/index.js';

const Form = styled.form`
border: solid 1px black;
`;

// console.log(addEvent);
class EventsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventDate: ''
    };
    this.handleEventInput = this.handleEventInput.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleEventInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleEventSubmit(e) {
    e.preventDefault();
    // console.log();
    this.props.addEvent({name:this.state.eventName,date:this.state.eventDate});

  }

  render() {
    // console.log('this.props =====',this.props.addEvent);
    return (
      <Form onSubmit={this.handleEventSubmit}>
        <EventNameInput
          eventName={this.state.eventName}
          handleChange={this.handleEventInput}
        />
        <EventDateInput
          eventDate={this.state.eventDate}
          handleChange={this.handleEventInput}
        />
        <Button type="submit">Submit</Button>
      </Form>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(EventsForm);
