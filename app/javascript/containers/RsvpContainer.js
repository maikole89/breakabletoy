import React, { Component } from 'react';
// import Rsvp from "../components/Rsvp"

const RsvpContainer = (props) => {
  let rsvps = props.rsvps.map(rsvp => {
    return(
      <Rsvp
        key = {rsvp.id}
        id = {rsvp.id}
        text = {rsvp.body}
        user = {rsvp.username}
        eventId = {props.eventId}

      />
    )
  })

  return(
    <div>
      <h3>Rsvps</h3>
      <div className= "small-12 medium-8 columns medium-centered">
        {rsvps}
      </div>
    </div>
  )
}

export default RsvpContainer;
