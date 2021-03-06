import React from 'react';
import RsvpForm from '../containers/RsvpForm'
import RsvpField from "../components/RsvpField"

class EventShow extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        eventInfo: {},
        rsvps: []
      }
}

componentDidMount(){
let eventId = this.props.params.id
fetch(`/api/v1/events/${eventId}`)
.then(response => {

  if (response.ok) {
    return response;
  } else {
    let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
    throw(error);
  }
})
.then(response => response.json())
.then(body => {
  console.log(body)
  this.setState({
    eventInfo: body.events
  });

})
.catch(error => console.error(`Error in fetch: ${error.message}`));
}

render() {
    return(
        <div>
          <div className=" panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center"><h1>Details of Event:</h1></div>
          <div className="panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">
            <h3>{this.state.eventInfo.name}</h3>
            <p>{this.state.eventInfo.location}</p>
            <p>{this.state.eventInfo.description}</p>
            <p>{this.state.eventInfo.url}</p>
            <p>{this.state.eventInfo.event_date}</p>
          </div>

          <RsvpForm
            eventId = {this.state.eventInfo.id}
            addNewRsvp = {this.addNewRsvp}
          />

        </div>
      )
    }
}

export default EventShow;

{/* <RsvpContainer
  rsvps = {this.state.rsvps}
  eventId = {this.state.eventInfo.id}
/> */}
