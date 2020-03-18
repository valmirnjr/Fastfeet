import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import history from "~/services/history";

import { edit, deleteRequest } from "~/store/modules/delivery/actions";

import DeliveryModal from "../DeliveryModal";
import TableHeader from "~/components/TableHeader";
import { WithContext } from "~/components/Actions";
import TableBody from "./TableBody";
import Delivery from "./Delivery";
import { Table } from "~/styles/contentTableStyle";

export default function ContentTable({ deliveries, setDeliveries }) {
  const dispatch = useDispatch();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [choosenDelivery, setChoosenDelivery] = useState({
    id: null,
    start_date: "",
    end_date: "",
    recipient: {
      street: "",
      number: null,
    },
    signature: {
      path: "",
    },
  });

  function toggleModalVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleEdit() {
    dispatch(edit(choosenDelivery));
    history.push("/deliveries/store");
  }

  function handleDelete() {
    dispatch(deleteRequest(choosenDelivery.id));
    setDeliveries(
      deliveries.filter(delivery => delivery.id !== choosenDelivery.id)
    );
  }

  // This context provides the available actions for the deliveries page, each action has its specific function
  const actionsContext = [
    {
      name: "visualize",
      onClick: toggleModalVisibility,
    },
    {
      name: "edit",
      onClick: handleEdit,
    },
    {
      name: "delete",
      onClick: handleDelete,
    },
  ];

  return (
    <>
      <Table>
        <TableHeader
          columns={[
            "ID",
            "Destinatário",
            "Entregador",
            "Cidade",
            "Estado",
            "Status",
            "Ações",
          ]}
        />
        <TableBody
          data={deliveries}
          renderRow={delivery => (
            <Delivery
              key={String(delivery.id)}
              data={delivery}
              WrappedActions={WithContext(
                actionsContext,
                delivery,
                setChoosenDelivery,
                modalIsVisible
              )}
            />
          )}
        />
      </Table>
      <DeliveryModal
        delivery={choosenDelivery}
        visible={modalIsVisible}
        setVisible={setModalIsVisible}
      />
    </>
  );
}

ContentTable.propTypes = {
  deliveries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      recipient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }).isRequired,
      deliveryman: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      canceled_at: PropTypes.string,
      signature_id: PropTypes.number,
      end_date: PropTypes.string,
      start_date: PropTypes.string,
    })
  ).isRequired,
  setDeliveries: PropTypes.func.isRequired,
};
