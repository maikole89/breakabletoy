import React from 'react'
import RsvpField from '../components/RsvpField'


class RsvpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventRsvp: "",
      errors: {}
    }
    this.handleRsvpInput = this.handleRsvpInput.bind(this)
    this.validateEventRsvp = this.validateEventRsvp.bind(this)
    this.clearFields = this.clearFields.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRsvpInput(event) {
    this.setState({ eventRsvp: event.target.value })
  }

  clearFields(event) {
    event.preventDefault()
    this.setState({ eventRsvp: 'yes' })
  }

  validateEventRsvp(selection) {
    if (selection.trim() === '') {
      let newError = { eventRsvp: 'Please enter a rating.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.eventRsvp
      this.setState({ errors: errorState })
      return true
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.validateEventRsvp(this.state.eventRsvp)) {
      let formPayload = {
        eventRsvp: this.state.eventRsvp,
        event_id: this.props.eventId
      }
      this.props.addNewEvent(formPayload)
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
    errorItems = Object.values(this.state.errors).map(error => {
    return(<p key={error}>{error}</p>)
    })
    errorDiv = <div className="callout alert">{errorItems}</div>
  }

    return(
      <div className=" panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">
        <h2 className="small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">RSVP To This Event!</h2>
        {errorDiv}
        <form className="field small-8 columns" onSubmit={this.handleSubmit}>
          <RsvpField
            content={this.state.eventRsvp}
            label=""
            name="review-rating"
            handleInput={this.handleRsvpInput}
          />

          <div className= "small-12 medium-8 columns">
            <ul className="button-group">
              <input type="submit" className="button radius" value="Clear" onClick={this.clearFields}/>
              &nbsp;
              <input type="submit" value="Rsvp to Event" className="button radius"/>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default RsvpForm;
