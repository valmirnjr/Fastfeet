import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import ContentTable from "./ContentTable";
import { Container } from "./styles";

export default function List() {
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    try {
      const response = await api.get("delivery/problems");
      setProblems(response.data);
    } catch (err) {
      console.tron.log(err);
      toast.error("Erro no carregamento dos problemas de entrega.");
    }
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <strong>Problemas na entrega</strong>
      <ContentTable problems={problems} setProblems={setProblems} />
    </Container>
  );
}
