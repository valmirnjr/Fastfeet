import React from "react";
import PropTypes from "prop-types";

export default function TableBody({ data: deliverymen, renderRow }) {
  return (
    <tbody>{deliverymen.map(deliveryman => renderRow(deliveryman))}</tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
      name: PropTypes.string,
      email: PropTypes.string,
    })
  ),
  renderRow: PropTypes.func.isRequired,
};

TableBody.defaultProps = {
  data: [],
};
