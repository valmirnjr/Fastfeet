import React from "react";
import PropTypes from "prop-types";

export default function TableBody({ data: deliveries, renderRow }) {
  return <tbody>{deliveries.map(delivery => renderRow(delivery))}</tbody>;
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      recipient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }).isRequired,
      deliveryman: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      canceled_at: PropTypes.string,
      signature_id: PropTypes.number,
      end_date: PropTypes.string,
      start_date: PropTypes.string,
    })
  ),
  renderRow: PropTypes.func.isRequired,
};

TableBody.defaultProps = {
  data: [],
};
