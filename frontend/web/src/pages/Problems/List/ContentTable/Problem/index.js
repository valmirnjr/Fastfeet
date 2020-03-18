import React from "react";
import PropTypes from "prop-types";

export default function Problem({ data: problem, WrappedActions }) {
  return (
    <tr>
      <td>{`#${problem.id}`}</td>
      <td className="truncate">{problem.description}</td>
      <td>{WrappedActions}</td>
    </tr>
  );
}

Problem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  WrappedActions: PropTypes.element.isRequired,
};
