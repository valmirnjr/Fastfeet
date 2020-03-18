import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import history from "~/services/history";

import { edit, deleteRequest } from "~/store/modules/deliveryman/actions";

import TableHeader from "~/components/TableHeader";
import { WithContext } from "~/components/Actions";
import { Table } from "~/styles/contentTableStyle";
import TableBody from "./TableBody";
import Deliveryman from "./Deliveryman";

export default function ContentTable({ deliverymen, setDeliverymen }) {
  const dispatch = useDispatch();
  const [choosenDeliveryman, setChoosenDeliveryman] = useState({
    id: "",
  });

  function handleEdit() {
    dispatch(edit(choosenDeliveryman));
    history.push("/deliverymen/store");
  }

  function handleDelete() {
    dispatch(deleteRequest(choosenDeliveryman.id));
    setDeliverymen(
      deliverymen.filter(
        deliveryman => deliveryman.id !== choosenDeliveryman.id
      )
    );
  }

  const actionsContext = [
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
    <Table>
      <TableHeader columns={["ID", "Foto", "Nome", "Email", "Ações"]} />
      <TableBody
        data={deliverymen}
        renderRow={deliveryman => (
          <Deliveryman
            key={String(deliveryman.id)}
            data={deliveryman}
            WrappedActions={WithContext(
              actionsContext,
              deliveryman,
              setChoosenDeliveryman
            )}
          />
        )}
      />
    </Table>
  );
}

ContentTable.propTypes = {
  deliverymen: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setDeliverymen: PropTypes.func.isRequired,
};
