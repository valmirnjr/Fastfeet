import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "@rocketseat/unform";

import {
  registerRequest,
  updateRequest,
} from "~/store/modules/deliveryman/actions";

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
  const initialDeliveryman = useSelector(state =>
    isRegistering
      ? {
          id: null,
          name: null,
          email: null,
        }
      : {
          id: state.deliveryman.info.id,
          name: state.deliveryman.info.name,
          email: state.deliveryman.info.email,
          avatar: {
            url:
              state.deliveryman.info.avatar &&
              state.deliveryman.info.avatar.url,
          },
        }
  );

  function handleSubmit(data) {
    const deliveryman = {
      id: initialDeliveryman.id,
      name: data.name,
      email: data.email,
      avatar_id: data.avatar_id,
    };

    if (isRegistering) {
      dispatch(registerRequest(deliveryman));
    } else {
      dispatch(updateRequest(deliveryman));
    }
  }

  return (
    <Container>
      <Form initialData={initialDeliveryman} onSubmit={handleSubmit}>
        {isRegistering ? (
          <RegisterHeader pageName="entregadores" />
        ) : (
          <EditHeader pageName="entregadores" />
        )}
        <FormBody />
      </Form>
    </Container>
  );
}
