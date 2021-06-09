// import { useState, useEffect } from "react";
import "./App.css";
// import LinkedListComp from "./components/LinkedList";
// import { LinkedList } from "./DataStructures/linkedlist";

// const list = new LinkedList<any>();

// const { REACT_APP_TEST_KEY } = process.env;

function App() {
  // const [data, setData] = useState("");

//  // useEffect(() => {
  //   ["head", 1, 2, 3, 4, "tail"].forEach((data) => list.append(data));
  // }, []);
 
  // const handleData = ({ target: { value } }: any) => {
  //   setData(value);
  // };

  // const addData = () => {
  //   if (!!data) {
  //     list.append(data);
  //     setData("");
  //   }
  // };

  return (
    <div className="App">
      <h1>Welcome To LinkedList Creator!!</h1>
      {/* <br />
      <h2>Testing Env {REACT_APP_TEST_KEY}</h2>
      <input type="text" value={data} onChange={handleData} />
      <button onClick={addData}>Add</button>
      <br />
      <i>(click on Node to delete)</i>
      <LinkedListComp list={list} /> */}
    </div>
  );
}

export default App;
