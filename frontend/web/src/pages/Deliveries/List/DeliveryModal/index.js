import React from "react";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt-BR";
import PropTypes from "prop-types";

import api from "~/services/api";
import Modal from "~/components/Modal";

export default function DeliveryModal({ delivery, ...rest }) {
  const dateFormatted = date => {
    if (date) {
      return format(parseISO(date), "dd'/'MM'/'yy", { locale: pt });
    }
    return null;
  };

  return (
    <Modal {...rest}>
      <ul>
        <li>
          <strong>Informações da encomenda</strong>
          <span>
            {`${delivery.recipient.street}, ${delivery.recipient.number}`}
          </span>
          <span>
            {`${delivery.recipient.city} - ${delivery.recipient.state}`}
          </span>
          <span>{delivery.recipient.cep}</span>
        </li>
        <li>
          <strong>Datas</strong>
          <span>
            <b>Retirada: </b>
            {dateFormatted(delivery.start_date) || "Aguardando entregador."}
          </span>
          <span>
            <b>Entrega: </b>
            {dateFormatted(delivery.end_date) || "-"}
          </span>
        </li>
        <li>
          <strong>Assinatura do destinatário</strong>
          {delivery.signature ? (
            <img
              src={`${api.defaults.baseURL}/files/${delivery.signature.path}`}
              alt="signature"
            />
          ) : (
            <span className="align-center">Aguardando entrega</span>
          )}
        </li>
      </ul>
    </Modal>
  );
}

DeliveryModal.propTypes = {
  delivery: PropTypes.shape({
    recipient: PropTypes.shape({
      street: PropTypes.string.isRequired,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      cep: PropTypes.string,
    }).isRequired,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    signature: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
