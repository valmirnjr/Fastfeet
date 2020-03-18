import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "@rocketseat/unform";

import {
  registerRequest,
  updateRequest,
} from "~/store/modules/recipient/actions";

import EditHeader from "~/components/EditHeader";
import RegisterHeader from "~/components/RegisterHeader";
import FormBody from "./FormBody";
import { Container } from "~/styles/ListAndStore";

export default function Store() {
  const dispatch = useDispatch();

  const location = useLocation();
  const isRegistering = location.state && location.state.isRegistering;

  const initialRecipient = useSelector(state =>
    isRegistering
      ? {}
      : {
          id: state.recipient.info.id,
          name: state.recipient.info.name,
          street: state.recipient.info.street,
          number: state.recipient.info.number,
          complement: state.recipient.info.complement,
          city: state.recipient.info.city,
          state: state.recipient.info.state,
          cep: state.recipient.info.cep,
        }
  );

  function handleSubmit(data) {
    const recipient = {
      id: initialRecipient.id,
      name: data.name,
      street: data.street,
      number: data.number,
      complement: data.complement,
      city: data.city,
      state: data.state,
      cep: data.cep,
    };

    if (isRegistering) {
      dispatch(registerRequest(recipient));
    } else {
      dispatch(updateRequest(recipient));
    }
  }

  return (
    <Container>
      <Form initialData={initialRecipient} onSubmit={handleSubmit}>
        {isRegistering ? (
          <RegisterHeader pageName="destinatários" />
        ) : (
          <EditHeader pageName="destinatários" />
        )}
        <FormBody />
      </Form>
    </Container>
  );
}
