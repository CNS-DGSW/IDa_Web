import React from "react";
import "./Table.scss";

interface TableProps {
  children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <>
      <div className="List">
        <table className="List-table">
          <tbody className="List-table-tbody">{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
