import { all, takeLatest, call } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

export function* cancelProblem({ payload }) {
  try {
    yield call(api.delete, `delivery/${payload.problemId}/problems`);
    toast.success("Encomenda cancelada com sucesso!");

    history.push("/problems");
  } catch (err) {
    toast.error(
      "Erro no cancelamento da encomenda. Por favor, tente novamente."
    );
    console.tron.log(err);
  }
}
/*
export function* updateRecipient({ payload }) {
  try {
    yield call(
      api.put,
      `recipients/${payload.recipient.id}`,
      payload.recipient
    );
    toast.success("Perfil do destinatário atualizado com sucesso!");

    history.push("/recipients");
  } catch (err) {
    toast.error(
      "Erro na atualização do destinatário. Por favor, tente novamente."
    );
    console.tron.log(err);
  }
}

export function* deleteRecipient({ payload }) {
  try {
    yield call(api.delete, `recipients/${payload.recipientId}`);

    toast.success("Entregador deletado com sucesso!");
  } catch (err) {
    console.tron.log(err);
    toast.error(
      "Erro no apagamento do registro do entregador. Por favor, tente novamente."
    );
  }
}
 */
export default all([
  takeLatest("@problem/CANCEL_REQUEST", cancelProblem),
  // takeLatest("@recipient/UPDATE_REQUEST", updateRecipient),
  // takeLatest("@recipient/DELETE_REQUEST", deleteRecipient),
]);
