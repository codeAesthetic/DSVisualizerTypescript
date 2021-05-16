import React, { ReactElement, useState, useEffect, useCallback } from "react";
import { LinkedList, DSNode } from "../DataStructures/linkedlist";
import Node from "./Node";

interface Props {
  list: LinkedList<any>;
}

export default function LinkedListComp({ list }: Props): ReactElement {
  let size = list.size();
  const [listArr, setlistArr] = useState([]);

  const handleListAddition = useCallback(() => {
    const arr: any = [];
    const items = list.items();
    while (true) {
      const item = items.next();
      if (item.done) break;
      arr.push(item.value);
    }
    setlistArr(arr);
  }, [list]);

  useEffect(() => {
    handleListAddition();
  }, [handleListAddition, size]);

  const handleDeleteNode = (value: string) => {
    list.delete(value);
    handleListAddition();
  };

  return (
    <div className="listWrapper">
      {listArr.map(({ value }: DSNode<any>, i) => (
        <Node
          key={i}
          deleteNode={handleDeleteNode}
          value={value}
          hasNext={i + 1 < list.size()}
        />
      ))}
    </div>
  );
}
