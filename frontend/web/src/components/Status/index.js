import React, { useState } from "react";
import PropTypes from "prop-types";

import themes from "~/resources/themes";
import { Container, Content } from "./styles";

export default function Status({ delivery }) {
  function getStatusTheme() {
    if (delivery.canceled_at !== null) {
      return themes.canceled;
    }
    if (delivery.end_date !== null && delivery.signature_id !== null) {
      return themes.delivered;
    }
    if (delivery.start_date !== null) {
      return themes.withdrawn;
    }
    if (delivery.start_date === null) {
      return themes.pending;
    }

    throw new Error(
      "Problem with delivery tracking. Please contact admin@fastfeet.com.br for more details."
    );
  }

  const statusTheme = useState(getStatusTheme())[0];

  return (
    <Container>
      <Content status={statusTheme}>
        <span>{statusTheme.name}</span>
      </Content>
    </Container>
  );
}

Status.propTypes = {
  delivery: PropTypes.shape({
    canceled_at: PropTypes.string,
    end_date: PropTypes.string,
    signature_id: PropTypes.number,
    start_date: PropTypes.string,
  }),
};

Status.defaultProps = {
  delivery: {
    canceled_at: null,
    end_date: null,
    signature_id: null,
    start_date: null,
  },
};
