import React, { Component } from 'react';
import RsvpField from "../components/RsvpField"

const RsvpContainer = (props) => {

  let rsvps = props.rsvps.map(rsvp => {
    
    return(
      <RsvpField
        key = {rsvp.id}
        id = {rsvp.id}
        text = {rsvp.body}
        user = {rsvp.user_name}
        eventId = {props.event_id}
        rsvp_total = {rsvp.rsvp_total}

      />
    )
  })

  return(
    <div>
      <div className= "small-12 medium-8 columns medium-centered">
        {rsvps}
      </div>
    </div>
  )
}

export default RsvpContainer;
