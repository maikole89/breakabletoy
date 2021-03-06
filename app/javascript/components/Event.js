import React from "react";
import { Link } from 'react-router';

const Event = (props) => {
  return (
    <div>
      <li key={props.id}>
        <Link to={`events/${props.id}`}>{ props.name } { props.event_date}</Link>
      </li>
    </div>
  );
};

export default Event;
