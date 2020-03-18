import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { cancelRequest } from "~/store/modules/problem/actions";
import ProblemModal from "../ProblemModal";
import { Table } from "~/styles/contentTableStyle";
import { WithContext } from "~/components/Actions";
import TableHeader from "~/components/TableHeader";
import TableBody from "./TableBody";
import Problem from "./Problem";

export default function ContentTable({ problems, setProblems }) {
  const dispatch = useDispatch();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [choosenProblem, setChoosenProblem] = useState({
    id: "",
    description: "",
  });

  function toggleModalVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleCancel() {
    dispatch(cancelRequest(choosenProblem.id));
    setProblems(problems.filter(problem => problem.id !== choosenProblem.id));
  }

  const actionsContext = [
    {
      name: "visualize",
      onClick: toggleModalVisibility,
    },
    {
      name: "cancel",
      onClick: handleCancel,
    },
  ];

  return (
    <>
      <Table>
        <TableHeader columns={["Encomenda", "Problema", "Ações"]} />
        <TableBody
          data={problems}
          renderRow={problem => (
            <Problem
              key={String(problem.id)}
              data={problem}
              WrappedActions={WithContext(
                actionsContext,
                problem,
                setChoosenProblem,
                modalIsVisible
              )}
            />
          )}
        />
      </Table>
      <ProblemModal
        problem={choosenProblem}
        visible={modalIsVisible}
        setVisible={setModalIsVisible}
      />
    </>
  );
}

ContentTable.propTypes = {
  problems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  setProblems: PropTypes.func.isRequired,
};
