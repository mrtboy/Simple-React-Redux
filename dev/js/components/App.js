import React from 'react';
import EventList from '../containers/EventList'
import EventDetail from '../containers/EventDetail';



const App = () => {
  return(
  <div>
    <h2>Events List:</h2>
    <EventList />
    <hr/>
    <h2>Event Details:</h2>
    <EventDetail />
  </div>
  )
};


export default App;