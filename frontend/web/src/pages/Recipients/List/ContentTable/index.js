import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import history from "~/services/history";
import { edit, deleteRequest } from "~/store/modules/recipient/actions";

import { Table } from "~/styles/contentTableStyle";
import TableHeader from "~/components/TableHeader";
import TableBody from "./TableBody";
import { WithContext } from "~/components/Actions";
import Recipient from "./Recipient";

export default function ContentTable({ recipients, setRecipients }) {
  const dispatch = useDispatch();

  const [choosenRecipient, setChoosenRecipient] = useState({
    id: "",
    name: "",
    street: "",
    number: null,
    complement: "",
    city: "",
    state: "",
    cep: "",
  });

  function handleEdit() {
    dispatch(edit(choosenRecipient));
    history.push("/recipients/store");
  }

  function handleDelete() {
    dispatch(deleteRequest(choosenRecipient.id));
    setRecipients(
      recipients.filter(recipient => recipient.id !== choosenRecipient.id)
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
      <TableHeader columns={["ID", "Nome", "Endereço", "Ações"]} />
      <TableBody
        data={recipients}
        renderRow={recipient => (
          <Recipient
            key={String(recipient.id)}
            data={recipient}
            WrappedActions={WithContext(
              actionsContext,
              recipient,
              setChoosenRecipient
            )}
          />
        )}
      />
    </Table>
  );
}

ContentTable.propTypes = {
  recipients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setRecipients: PropTypes.func.isRequired,
};
