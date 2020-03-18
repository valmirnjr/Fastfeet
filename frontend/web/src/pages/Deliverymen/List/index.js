import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import ListHeader from "~/components/ListHeader";
import ContentTable from "./ContentTable";

import { Container } from "~/styles/ListAndStore";

export default function List() {
  const [deliverymen, setDeliverymen] = useState([]);

  /**
   * Requests the backend for a list of deliverymen
   * @param {String} deliverymanName: query param which filters the deliverymen search
   */
  async function loadDeliverymen(deliverymanName) {
    try {
      const response = await api.get("/deliverymen", {
        params: { name: deliverymanName },
      });
      setDeliverymen(response.data);
    } catch (err) {
      console.tron.log(err);
      toast.error("Erro no carregamento dos entregadores.");
    }
  }

  useEffect(() => {
    loadDeliverymen();
  }, []);

  function handleSubmit({ search: deliverymanName = "" }) {
    loadDeliverymen(deliverymanName);
  }

  return (
    <Container>
      <ListHeader
        pageName="entregadores"
        destinationPath="/deliverymen/store"
        handleSubmit={handleSubmit}
      />
      <ContentTable deliverymen={deliverymen} setDeliverymen={setDeliverymen} />
    </Container>
  );
}
