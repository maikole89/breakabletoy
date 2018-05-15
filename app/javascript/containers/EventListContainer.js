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
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleEventDateChange = this.handleEventDateChange.bind(this)
    this.handleEventTimeChange = this.handleEventTimeChange.bind(this)
    this.handleURLChange = this.handleURLChange.bind(this)
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

  handleNameChange(event) {
    this.setState( {
      name: event.target.value,
     })
  }

  handleLocationChange(event) {
    this.setState( {
      location: event.target.value,
     })
  }

  handleDescriptionChange(event) {
    this.setState( {
      description: event.target.value,
     })
  }

  handleEventDateChange(event) {
    this.setState( {
      event_date: event.target.value,
     })
  }

  handleEventTimeChange(event) {
    this.setState( {
      event_time: event.target.value,
     })
  }

  handleURLChange(event) {
    this.setState( {
      url: event.target.value,
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
      headers: { 'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json' }
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
          id={ event.id }
          key={ event.id }
          name={ event.name }
          location= { event.location }
          event_date= { event.event_date }
        />
      </div>
      );
    });

    return (
      <div id="event-list">
        <div id="genre-description">

          <div className="panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">
            <h1>Welcome to TEAM-CROWD!</h1>
            <h3>The World Needs Heroes</h3>
            <p>Choose an event below or create your own!</p>
          </div>

          {/* <div className="container-fluid no-padding">
            <div>
              <div className="col-md-10">
          <img src="https://pre00.deviantart.net/57c3/th/pre/f/2016/032/5/2/overwatch_wallpaper_hd_by_mrnocilla-d9q4d3z.jpg"/> */}
          <container>
            <p className="small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">TEAM-CROWD offers Overwatch e-sports enthusiasts a home where they can find local venues hosting real-time professional matches</p><br/>
          </container>
          {/* </div>
            </div>
          </div> */}

          <h2 className="panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">Events Near You</h2>
          <p className="small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">Browse events to join a viewing party for your favorite Overwatch League team!</p><br/>
        </div>

        <div className="panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">
          <h2> Select an Upcoming Event</h2>
          <article>
            { eventComponents }
          </article>
        </div>
        <div className="section1">
          <section>

          </section>
        </div>
        <div className="createanevent panel">
          <h3 className="small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center"> Create a New Event </h3>

          <form onSubmit={this.handleFormSubmit}>
            <label>Name (Match):</label>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />

            <label>Location(City, State):</label>
            <input type="text" value={this.state.location} onChange={this.handleLocationChange} />

            <label>Description(Venue):</label>
            <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />

            <label>Date of Event:</label>
            <input type="date" value={this.state.event_date} onChange={this.handleEventDateChange} />

            <label>Time of Event:</label>
            <input type="text" value={this.state.event_time} onChange={this.handleEventTimeChange} />

            <label>URL:</label>
            <input type="text" value={this.state.url} onChange={this.handleURLChange} />

            <input className="button secondary" type="submit" value="Submit"/>

          </form>
        </div>
      </div>
    );

  }
}

export default EventListContainer;
