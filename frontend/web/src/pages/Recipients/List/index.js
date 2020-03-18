import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import ListHeader from "~/components/ListHeader";
import ContentTable from "./ContentTable";

import { Container } from "~/styles/ListAndStore";

export default function List() {
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients(recipientName) {
    try {
      const response = await api.get("/recipients", {
        params: { name: recipientName },
      });
      setRecipients(response.data);
    } catch (err) {
      console.tron.log(err);
      toast.error("Erro no carregamento das encomendas.");
    }
  }

  useEffect(() => {
    loadRecipients();
  }, []);

  function handleSubmit({ search: recipientName = "" }) {
    loadRecipients(recipientName);
  }

  return (
    <Container>
      <ListHeader
        pageName="destinatários"
        destinationPath="/recipients/store"
        handleSubmit={handleSubmit}
      />
      <ContentTable recipients={recipients} setRecipients={setRecipients} />
    </Container>
  );
}
