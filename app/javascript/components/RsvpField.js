import React from 'react';

const RsvpField = (props) => {
  return (
    <label>{props.label}
      <select
        name={props.name}
        value={props.content}
        onChange={props.handleInput}>
        <option value="yes">Yes</option>
        <option value="no">No</option>

      </select>
    </label>
  )
}

export default RsvpField;
