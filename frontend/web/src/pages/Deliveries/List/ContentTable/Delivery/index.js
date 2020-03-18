import React from "react";
import PropTypes from "prop-types";

import Status from "~/components/Status";
import DefaultAvatar from "~/components/DefaultAvatar";

export default function Delivery({ data: delivery, WrappedActions }) {
  console.tron.log(delivery);
  return (
    <tr>
      <td>{`#${delivery.id}`}</td>
      <td>{delivery.recipient.name}</td>
      <td id="deliveryman">
        {delivery.deliveryman.avatar ? (
          <img
            className="avatar"
            src={delivery.deliveryman.avatar.url}
            alt="avatar"
          />
        ) : (
          <DefaultAvatar name={delivery.deliveryman.name} />
        )}
        {delivery.deliveryman.name}
      </td>
      <td>{delivery.recipient.city}</td>
      <td>{delivery.recipient.state}</td>
      <td>
        <Status delivery={delivery} />
      </td>
      <td>{WrappedActions}</td>
    </tr>
  );
}

Delivery.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    recipient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
    deliveryman: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  WrappedActions: PropTypes.element.isRequired,
};
