import { all, takeLatest, call } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

export function* registerDelivery({ payload }) {
  try {
    yield call(api.post, "deliveries", payload.delivery);
    toast.success("Encomenda cadastrada com sucesso!");

    history.push("/deliveries");
  } catch (err) {
    toast.error("Erro no cadastro da encomenda. Por favor, tente novamente.");
    console.tron.log(err);
  }
}

export function* updateDelivery({ payload }) {
  try {
    yield call(api.put, `deliveries/${payload.delivery.id}`, payload.delivery);
    toast.success("Encomenda atualizada com sucesso!");

    history.push("/deliveries");
  } catch (err) {
    toast.error(
      "Erro na atualização da encomenda. Por favor, tente novamente."
    );
    console.tron.log(err);
  }
}

export function* deleteDelivery({ payload }) {
  try {
    yield call(api.delete, `deliveries/${payload.deliveryId}`);

    toast.success("Entrega deletada com sucesso!");
  } catch (err) {
    toast.error("Erro no apagamento da encomenda. Por favor, tente novamente.");
    console.tron.log(err);
  }
}

export default all([
  takeLatest("@delivery/REGISTER_REQUEST", registerDelivery),
  takeLatest("@delivery/UPDATE_REQUEST", updateDelivery),
  takeLatest("@delivery/DELETE_REQUEST", deleteDelivery),
]);
