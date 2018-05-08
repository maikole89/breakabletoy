import React from 'react';

class EventShow extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        eventInfo: {}
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
    eventInfo: body.event
  });

})
.catch(error => console.error(`Error in fetch: ${error.message}`));
}

render() {
    return(
        <div>
          <div><h1>Details of Event:</h1></div>
          <div>
            <h1>{this.state.eventInfo.name}</h1><br/>
            <p>{this.state.eventInfo.location}</p><br/>
            <p>{this.state.eventInfo.description}</p><br/>
          </div>
      </div>
      )
    }
}

export default EventShow;
