import React from "react";
import PropTypes from "prop-types";

export default function TableBody({ data: problems, renderRow }) {
  return <tbody>{problems.map(problem => renderRow(problem))}</tbody>;
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ),
  renderRow: PropTypes.func.isRequired,
};

TableBody.defaultProps = {
  data: [],
};
