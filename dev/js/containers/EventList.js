import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {selectEvent} from '../actions/index';


class EventList extends Component {

  createListItems() {
    return this.props.events.map((event) => {
      return (
        <li key={event.id}
          onClick={()=> this.props.selectEvent(event)}>
          {event.name}
          </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}

function mapSateToProps(state){
  return {
    events: state.events
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectEvent: selectEvent}, dispatch)
}

export default connect(mapSateToProps, matchDispatchToProps)(EventList);
