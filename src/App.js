import { useEffect, useState } from "react";
import ExpandableList from "./components/ExpandableList";
import list from "./data/list";

const App = () => {
  const [openBranches, setOpenBranches] = useState([...list]);

  return (
    <ExpandableList
      list={list}
      openBranches={openBranches}
      setOpenBranches={setOpenBranches}
    />
  );
};

export default App;
