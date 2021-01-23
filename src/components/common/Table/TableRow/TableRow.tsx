import React from "react";
import "./TableRow.scss";

interface TableRowProps {
  children: React.ReactNode;
}

const TableRow = ({ children }: TableRowProps) => {
  return (
    <>
      <tr className="List-table-tbody-tr">{children}</tr>
    </>
  );
};

export default TableRow;
