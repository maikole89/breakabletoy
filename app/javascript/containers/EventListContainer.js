import React, { Component } from 'react';
import Event from "../components/Event";
import { Link } from 'react-router';



class EventListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      errorMessage: ''
     };
    this.getEvents = this.getEvents.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this)
}

addNewEvent(formPayload) {
  fetch('/api/v1/reviews.json', {
    credentials: 'same-origin',
    method: 'post',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(formPayload)
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseReview => {
      if (responseReview['id'] == 'error message') {
        this.setState({ errorMessage: responseReview['body'] })
      } else {
        let newReviews = this.state.reviews.concat(responseReview)
        this.setState({
          reviews: newReviews,
          errorMessage: ''
        })
    }
    })
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

  componentDidMount() {
    this.getEvents();
  }

  render() {
    let eventComponents = this.state.events.map((event) => {

      return (
        <Event
          key={ event.id }
          name={ event.name }
          id={ event.id }

        />
      );
    });

    return (
      <div id="event-list">
        <h1>Events Near You</h1>
        { eventComponents }
      </div>
    );
  }
}

export default EventListContainer;
