import { all, takeLatest, call } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

export function* registerDeliveryman({ payload }) {
  try {
    yield call(api.post, "deliverymen", payload.deliveryman);
    toast.success("Entregador cadastrado com sucesso!");

    history.push("/deliverymen");
  } catch (err) {
    toast.error("Erro no cadastro do entregador. Por favor, tente novamente.");
    console.tron.log(err);
  }
}

export function* updateDeliveryman({ payload }) {
  try {
    yield call(
      api.put,
      `deliverymen/${payload.deliveryman.id}`,
      payload.deliveryman
    );
    toast.success("Perfil do entregador atualizado com sucesso!");

    history.push("/deliverymen");
  } catch (err) {
    toast.error(
      "Erro na atualização do entregador. Por favor, tente novamente."
    );
    console.tron.log(err);
  }
}

export function* deleteDeliveryman({ payload }) {
  const { deliverymanId } = payload;
  try {
    const response = yield call(
      api.get,
      `deliveryman/${deliverymanId}/deliveries`
    );
    console.tron.log(response);
    if (response.data.length === 0) {
      yield call(api.delete, `deliverymen/${payload.deliverymanId}`);

      toast.success("Entregador deletado com sucesso!");
    } else {
      toast.info(
        "Este entregador ainda possui encomendas para entregar. Por favor, transfira as encomendas para outro entregador antes de excluir."
      );
    }
  } catch (err) {
    console.tron.log(err);
    toast.error(
      "Erro no apagamento do registro do entregador. Por favor, tente novamente."
    );
  }
}

export default all([
  takeLatest("@deliveryman/REGISTER_REQUEST", registerDeliveryman),
  takeLatest("@deliveryman/UPDATE_REQUEST", updateDeliveryman),
  takeLatest("@deliveryman/DELETE_REQUEST", deleteDeliveryman),
]);
