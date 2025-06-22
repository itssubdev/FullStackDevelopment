import React,{useContext} from "react";
import { CounterContext } from "./CounterContext";

function ShowCountValue() {
    const {count}= useContext(CounterContext);
  return <div>
      <h1>{count}</h1>
  </div>;
}

export default ShowCountValue;
