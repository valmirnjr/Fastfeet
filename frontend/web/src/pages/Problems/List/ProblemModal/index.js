import React from "react";
import PropTypes from "prop-types";

import Modal from "~/components/Modal";

export default function ProblemModal({ problem, ...rest }) {
  return (
    <Modal {...rest}>
      <>
        <strong>VISUALIZAR PROBLEMA</strong>
        <p>{problem.description}</p>
      </>
    </Modal>
  );
}

ProblemModal.propTypes = {
  problem: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};
