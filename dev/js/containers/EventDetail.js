import React, { Component } from 'react';
import {connect} from 'react-redux';

class EventDetail extends Component {

  render() {
    if(!this.props.event) {
      return (<h4>Select a event...</h4>);
    }
    return (
      <div>
        <h2>{this.props.event.name}</h2>
        <h3>{this.props.event.description}</h3>
      </div>
    );
  }
}


function mapSateToProps(state){
  return {
    event: state.activeEvent
  };
}

export default connect(mapSateToProps)(EventDetail);
