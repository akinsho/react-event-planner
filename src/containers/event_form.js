import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import EventNameInput from '../components/event_name_input.js';
import EventDateInput from '../components/event_date_input.js';
import Button from '../components/button.js';
import * as actions from '../actions/index.js';

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: rgb(0, 150, 136);
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
    if (!this.state.eventName || !this.state.eventDate) {
      return;
    }

    this.props.addEvent({name:this.state.eventName,date:this.state.eventDate});

    this.setState({
      eventName: '',
      eventDate: ''
    });
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
        <Button type="submit">+</Button>
      </Form>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(EventsForm);
