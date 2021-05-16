import React, { ReactElement } from "react";

interface Props {
  value: string;
  hasNext: boolean;
  deleteNode: (val: string) => void;
}

export default function Node({ value, hasNext, deleteNode }: Props): ReactElement {
  return (
    <div className="NodeWrapper" title="remove" onClick={() => deleteNode(value)}>
      <div className="Node">{value}</div>
      {hasNext && <div className="arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>}
    </div>
  );
}
