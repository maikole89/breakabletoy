import React from 'react'
import RsvpField from '../components/RsvpField'


class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventRsvp: "",
      RsvpMessage: "",
      rsvpTotal: 0,
      errors: {}
    }
    this.handleRsvpInput = this.handleRsvpInput.bind(this)
    this.clearFields = this.clearFields.bind(this)
    this.addRsvp = this.addRsvp.bind(this)
    this.handlePlusOneRsvp = this.handlePlusOneRsvp.bind(this)
  }

  handleRsvpInput(event) {
    this.setState({ eventRsvp: event.target.value })
  }

  clearFields(event) {
    event.preventDefault()
    this.setState({ eventRsvp: 'yes' })
  }

    addRsvp(RsvpResult) {
      let event_id = RsvpResult.event
      console.log(event_id)

      fetch(`/api/v1/events/${event_id}/rsvps`, {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(RsvpResult),
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
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
      .then(responseMessage => {
        debugger;
        this.setState({
          rsvpTotal: responseMessage.rsvpTotal
        })
      })
    }

  handlePlusOneRsvp(event) {
    event.preventDefault()
  let RsvpResult = {
    value: "1",
    event: this.props.eventId
  }
  this.addRsvp(RsvpResult)
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

  let messageDiv = <div><p className="callout alert">{this.state.RsvpMessage}</p></div>

    return(
      <div className=" panel small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">
        <h2 className="small-block-grid-2 medium-block-grid-4 large-block-grid-6 small-only-text-center">RSVP To This Event!</h2>
        {errorDiv}
        <p>Rsvps: {this.state.rsvpTotal}</p>
        <form className="field small-8 medium-8 columns" onSubmit={this.handlePlusOneRsvp}>
          <RsvpField
            content={this.state.eventRsvp}
            label=""
            name="event-rsvp"
            handleInput={this.handleRsvpInput}
          />
          <div>{messageDiv}</div>
          <div className= "small-12 medium-8 columns medium-centered">
            <ul className="button-group">
              <input type="submit" className="button radius" value="Clear" onClick={this.clearFields}/>
              &nbsp;
              <input type="submit" value="Rsvp to Event" className="button radius" onClick={this.handleRsvpInput}/>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default RsvpForm;
