import React, { createRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Modal({ children, visible, setVisible }) {
  const modalRef = createRef();

  // Checks if a click outside the main div happened. If it did, the modal is closed.
  const handleClick = useCallback(
    e => {
      if (modalRef.current && modalRef.current.contains(e.target)) {
        return;
      }

      setVisible(false);
    },
    [modalRef, setVisible]
  );

  // This hook works like componentWillMount and componentWillUnmount in a single function.
  useEffect(() => {
    window.addEventListener("mousedown", handleClick, false);

    return () => {
      window.removeEventListener("mousedown", handleClick, false);
    };
  }, [handleClick]);

  return (
    <Container visible={visible}>
      <main ref={modalRef}>{children}</main>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
