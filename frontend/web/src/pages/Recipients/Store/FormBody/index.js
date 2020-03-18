import React from "react";
import { Input } from "@rocketseat/unform";

import { Container, Row } from "./styles";

export default function FormBody() {
  return (
    <Container>
      <Row>
        <div>
          <strong>Nome</strong>
          <Input name="name" placeholder="Ludwig van Beethoven" />
        </div>
      </Row>
      <Row>
        <div className="longer-input">
          <strong>Street</strong>
          <Input name="street" placeholder="Rua Beethoven" />
        </div>
        <div>
          <strong>Número</strong>
          <Input name="number" placeholder="1729" />
        </div>
        <div>
          <strong>Complemento</strong>
          <Input name="complement" placeholder="Apt. A" />
        </div>
      </Row>
      <Row>
        <div>
          <strong>Cidade</strong>
          <Input name="city" placeholder="Diadema" />
        </div>
        <div>
          <strong>Estado</strong>
          <Input name="state" placeholder="São Paulo" />
        </div>
        <div>
          <strong>CEP</strong>
          <Input name="cep" placeholder="09960-580" />
        </div>
      </Row>
    </Container>
  );
}
