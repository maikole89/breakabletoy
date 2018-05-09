import React from 'react'
import RatingField from '../components/RatingField'
import BodyField from '../components/BodyField'

class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventRating: '1',
      eventBody: '',
      errors: {}
    }
    this.handleRatingInput = this.handleRatingInput.bind(this)
    this.handleBodyInput = this.handleBodyInput.bind(this)
    this.clearFields = this.clearFields.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRatingInput(event) {
    this.setState({ eventRating: event.target.value })
  }

  handleBodyInput(event) {
    this.setState({ eventBody: event.target.value })
  }

  clearFields(event) {
    event.preventDefault()
    this.setState({ eventRating: '1' }),
    this.setState({ eventBody: '' })
  }

  validateEventBody(selection) {
    if (selection.trim() === '') {
      let newError = { eventRating: 'Please enter a rating.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.eventRating
      this.setState({ errors: errorState })
      return true
    }
  }

  validateEventBody(selection) {
    if (selection.trim() === '') {
      let newError = { eventBody: 'Please enter event content.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.eventBody
      this.setState({ errors: errorState })
      return true
    }
  }


  handleSubmit(event) {
    event.preventDefault()
    if(this.validateEventBody(this.state.eventRating) && this.validateEventBody(this.state.eventBody)) {
      console.log(this.state.eventBody)
      let formPayload = {
        rating: this.state.eventRating,
        body: this.state.eventBody,
        museum_id: this.props.museumId
      }
      this.props.addNewEvent(formPayload)
    }
  }

  render() {
    console.log(this.state.eventRating)
    console.log(this.state.eventBody)
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
    errorItems = Object.values(this.state.errors).map(error => {
    return(<li key={error}>{error}</li>)
    })
    errorDiv = <div className="callout alert">{errorItems}</div>
  }

    return(
      <div>Add an Event!
        {errorDiv}
        <form onSubmit={this.handleSubmit}>
          <RatingField
            content={this.state.eventRating}
            label="Event Rating (1-5)"
            name="event-rating"
            handleInput={this.handleRatingInput}
          />
          <BodyField
            content={this.state.eventBody}
            label="Event:"
            name="event-body"
            handleInput={this.handleBodyInput}
          />
          <div>
            <button onClick={this.clearFields}></button>
            <input type="submit" value="Add Event"/>
          </div>
        </form>
      </div>
    )
  }
}

export default EventForm;
