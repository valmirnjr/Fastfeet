import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "@rocketseat/unform";

import {
  registerRequest,
  updateRequest,
} from "~/store/modules/delivery/actions";

import EditHeader from "~/components/EditHeader";
import RegisterHeader from "~/components/RegisterHeader";
import FormBody from "./FormBody";
import { Container } from "~/styles/ListAndStore";

export default function Store() {
  const dispatch = useDispatch();

  const location = useLocation();
  const isRegistering = location.state && location.state.isRegistering;

  // If a new delivery is being registered, we do not provide any default value. On the other hand, if
  // a delivery is being edited, the info about the recipient, deliveryman and product must be passed.
  const initialDelivery = useSelector(state =>
    isRegistering
      ? {
          id: null,
          recipient: null,
          deliveryman: null,
          product: null,
        }
      : {
          id: state.delivery.info.id,
          recipient: {
            value: state.delivery.info.recipient.id,
            label: state.delivery.info.recipient.name,
          },
          deliveryman: {
            value: state.delivery.info.deliveryman.id,
            label: state.delivery.info.deliveryman.name,
          },
          product: state.delivery.info.product,
        }
  );

  function handleSubmit(data) {
    const delivery = {
      id: initialDelivery.id,
      recipient_id: data.recipient.value,
      deliveryman_id: data.deliveryman.value,
      product: data.product,
    };

    if (isRegistering) {
      dispatch(registerRequest(delivery));
    } else {
      dispatch(updateRequest(delivery));
    }
  }

  return (
    <Container>
      <Form initialData={initialDelivery} onSubmit={handleSubmit}>
        {isRegistering ? (
          <RegisterHeader pageName="encomendas" />
        ) : (
          <EditHeader pageName="encomendas" />
        )}
        <FormBody />
      </Form>
    </Container>
  );
}
