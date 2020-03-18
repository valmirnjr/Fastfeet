import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import ListHeader from "~/components/ListHeader";
import ContentTable from "./ContentTable";

import { Container } from "~/styles/ListAndStore";

export default function List() {
  const [deliveries, setDeliveries] = useState([]);

  /**
   * Requests the backend for a list of deliveries
   * @param {String} product: query param which filters the deliveries search
   */
  async function loadDeliveries(product) {
    try {
      const response = await api.get("/deliveries", { params: { product } });
      setDeliveries(response.data);
    } catch (err) {
      console.tron.log(err);
      toast.error("Erro no carregamento das encomendas.");
    }
  }

  useEffect(() => {
    loadDeliveries();
  }, []);

  function handleSubmit({ search: product = "" }) {
    loadDeliveries(product);
  }

  return (
    <Container>
      <ListHeader
        pageName="encomendas"
        destinationPath="/deliveries/store"
        handleSubmit={handleSubmit}
      />
      <ContentTable deliveries={deliveries} setDeliveries={setDeliveries} />
    </Container>
  );
}
