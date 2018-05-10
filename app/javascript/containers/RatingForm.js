import React from 'react'
import RatingField from '../components/RatingField'
import BodyField from '../components/BodyField'

class RatingForm  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
    errorItems = Object.values(this.state.errors).map(error => {
    return(<li key={error}>{error}</li>)
    })
    errorDiv = <div className="callout alert">{errorItems}</div>
  }

    return(
      <div>Add a new Event!
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

export default RatingForm;
