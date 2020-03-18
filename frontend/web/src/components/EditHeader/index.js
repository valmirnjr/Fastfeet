import React from "react";
import PropTypes from "prop-types";
import { MdChevronLeft, MdCheck } from "react-icons/md";

import history from "~/services/history";

import { Container } from "./styles";

export default function RegisterHeader({ pageName }) {
  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <strong>Edição de {pageName}</strong>
      <aside>
        <button type="button" onClick={handleGoBack}>
          <MdChevronLeft size={20} color="#fff" />
          <strong>VOLTAR</strong>
        </button>
        <button type="submit" className="submit">
          <MdCheck size={20} color="#fff" />
          <strong>SALVAR</strong>
        </button>
      </aside>
    </Container>
  );
}

RegisterHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
};
