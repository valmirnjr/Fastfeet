import React from "react";
import PropTypes from "prop-types";

import DefaultAvatar from "~/components/DefaultAvatar";

export default function Deliveryman({ data: deliveryman, WrappedActions }) {
  return (
    <tr>
      <td>{`#${deliveryman.id}`}</td>
      <td>
        {deliveryman.avatar ? (
          <img className="avatar" src={deliveryman.avatar.url} alt="avatar" />
        ) : (
          <DefaultAvatar name={deliveryman.name} />
        )}
      </td>
      <td>{deliveryman.name}</td>
      <td>{deliveryman.email}</td>
      <td>{WrappedActions}</td>
    </tr>
  );
}

Deliveryman.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
    email: PropTypes.string.isRequired,
  }).isRequired,
  WrappedActions: PropTypes.element.isRequired,
};
