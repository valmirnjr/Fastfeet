import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

import randomColor from "~/resources/colors";
import { Container } from "./styles";

export default function DefaultAvatar({ name, size }) {
  const [initials, setInitials] = useState("");
  const [color, setColor] = useState("");

  useMemo(() => {
    const [firstName, lastName] = name.split(" ");

    setInitials(firstName[0] + lastName[0]);
    setColor(randomColor());
  }, [name]);

  return (
    <Container color={color} size={size}>
      {initials}
    </Container>
  );
}

DefaultAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

DefaultAvatar.defaultProps = {
  size: null,
};
