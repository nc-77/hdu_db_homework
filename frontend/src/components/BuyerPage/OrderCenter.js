import React, { useState } from "react";

import { useSearch } from "../common/useSearch";
import { useTableList } from "../common/useTableList";

export default function OrderCenter() {
  const [source, setSource] = useState([]);
  const [data, SearchMenu, setData] = useSearch("Breed", "", source);
  const [data1, TableList, setData1] = useTableList("test", "", source);

  return (
    <div className="app-container">
      <SearchMenu />
      <br />
      <TableList />
    </div>
  );
}
