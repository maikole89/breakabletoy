import React, { Component } from 'react';
import Event from "../components/Event";
import EventForm from "../components/EventForm";

class EventListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      name: "",
      location: "",
      description: "",
      event_date: "",
      event_time: "",
      url: "",
      created_at: "",
      updated_at: ""
     };
    this.getEvents = this.getEvents.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

getEvents() {
  fetch('/api/v1/events.json')
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
    this.setState({ events: body.events });
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}


  handleButtonClick(id) {
    this.getEvents()
  }

  handleChange(event) {
    this.setState( { name: event.target.value })
  }

  componentDidMount() {
    this.getEvents();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name
    };
    console.log(formPayload)
    fetch('/api/v1/events', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
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
      // this.setState({ event: body.event.text,
      //   newEvent: '' });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    let eventComponents = this.state.events.map((event) => {

      return (
      <div>
        <Event
          key={ event.id }
          name={ event.name }
          id={ event.id }
        />
      </div>
      );
    });

    return (
      <div id="event-list">
        <div id="genre-description">

        </div>
        <h1>Events Near You</h1>
        { eventComponents }

        <h2> Add a New Event </h2>
        <div>

          <form onSubmit={this.handleFormSubmit}>
            <label>Add a New Event:</label>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );

  }
}

export default EventListContainer;
