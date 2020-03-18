import React from "react";
import PropTypes from "prop-types";

export default function Recipient({ data: recipient, WrappedActions }) {
  return (
    <tr>
      <td>{`#${recipient.id}`}</td>
      <td>{recipient.name}</td>
      <td>
        {recipient.street}, {recipient.number}, {recipient.city} -{" "}
        {recipient.state}
      </td>
      <td>{WrappedActions}</td>
    </tr>
  );
}

Recipient.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  WrappedActions: PropTypes.element.isRequired,
};
