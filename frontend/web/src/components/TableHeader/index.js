import React from "react";
import PropTypes from "prop-types";

import { Thead } from "./styles";

export default function TableHeader({ columns }) {
  return (
    <Thead>
      <tr>
        {columns.map(column => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </Thead>
  );
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
};

TableHeader.defaultProps = {
  columns: [],
};
