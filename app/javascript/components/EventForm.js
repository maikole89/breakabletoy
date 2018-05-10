import React from 'react'

const EventForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input
          type="text"
          placeholder="Name of Event"
          value={props.name}
          onChange={props.handleChange}
        />
        <input type="submit" value="Add To List" />
      </form>
    </div>
  )
}

export default EventForm
