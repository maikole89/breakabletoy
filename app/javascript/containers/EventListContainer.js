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
    this.setState( {
      name: event.target.value,
      location: event.target.value,
      description: event.target.value,
      event_date: event.target.value,
      event_time: event.target.value,
      url: event.target.value
     })
  }

  componentDidMount() {
    this.getEvents();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name,
      location: this.state.location,
      description: this.state.description,
      event_date: this.state.event_date,
      event_time: this.state.event_time,
      url: this.state.url,
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
      this.setState({ event: body.event.text,
        newEvent: '' });
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

          <h1 className="panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">Events Near You</h1>
        </div>
        <div className="panel ">
          <h2> Select an Upcoming Event</h2>
          <section>
            <article>
              { eventComponents }
            </article>
          </section>
        </div>

        <div className="panel">
          <h3> Add a New Event </h3>

          <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <label>Location:</label>
            <input type="text" value={this.state.location} onChange={this.handleChange} />
            <label>Description:</label>
            <input type="text" value={this.state.description} onChange={this.handleChange} />
            <label>Date of Event:</label>
            <input type="text" value={this.state.event_date} onChange={this.handleChange} />
            <label>Time of Event:</label>
            <input type="text" value={this.state.event_time} onChange={this.handleChange} />
            <label>URL:</label>
            <input type="text" value={this.state.url} onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );

  }
}

export default EventListContainer;
