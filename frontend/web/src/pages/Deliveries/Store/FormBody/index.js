import React from "react";
import { Input } from "@rocketseat/unform";

import AsyncSelect from "~/components/Inputs/AsyncSelect";

import api from "~/services/api";
import { Container } from "./styles";

export default function FormBody() {
  /**
   * Async function passed to the Select input to load the recipients
   * @param {String} inputValue: input entered by the user on the recipients field
   */
  async function loadRecipients(inputValue) {
    const response = await api.get(`/recipients?name=${inputValue}`);

    const recipients = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    return recipients;
  }

  /**
   * Async function passed to the Deliverymen Select input
   * @param {String} inputValue: name entered by the user on the deliverymen input field
   */
  async function loadDeliverymen(inputValue) {
    const response = await api.get(`/deliverymen?name=${inputValue}`);

    const deliverymen = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    return deliverymen;
  }

  return (
    <Container>
      <div>
        <div>
          <strong>Destinatário</strong>
          <AsyncSelect
            name="recipient"
            loadOptions={loadRecipients}
            placeholder="Pesquisar um destinatário..."
            defaultOptions
            cacheOptions
            required
          />
        </div>
        <div>
          <strong>Entregador</strong>
          <AsyncSelect
            name="deliveryman"
            loadOptions={loadDeliverymen}
            placeholder="Pesquisar um entregador..."
            defaultOptions
            cacheOptions
            required
          />
        </div>
      </div>
      <strong>Nome do produto</strong>
      <Input name="product" placeholder="Yamaha SX7" />
    </Container>
  );
}
