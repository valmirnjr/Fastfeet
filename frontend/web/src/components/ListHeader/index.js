import React, { createRef } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch, IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

export default function ListHeader({
  pageName,
  destinationPath,
  handleSubmit,
}) {
  // Tried to make a ref to the Form but an error occurs since refs to components have to be passed with forwardRef
  const buttonRef = createRef();

  function handleChange(e) {
    if (!e.target.value) {
      buttonRef.current.click();
    }
  }

  return (
    <Container>
      <strong>Gerenciando {pageName}</strong>
      <div>
        <Form onSubmit={handleSubmit}>
          <Input
            name="search"
            type="text"
            placeholder={`Buscar ${pageName}`}
            onChange={e => handleChange(e)}
          />
          <button ref={buttonRef} id="searchBtn" type="submit">
            <IoMdSearch size={22} color="#999" />
          </button>
        </Form>
        <aside>
          <Link
            to={{
              pathname: destinationPath,
              state: { isRegistering: true },
            }}
          >
            <IoMdAdd size={24} />
            <strong>CADASTRAR</strong>
          </Link>
        </aside>
      </div>
    </Container>
  );
}

ListHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
  destinationPath: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
