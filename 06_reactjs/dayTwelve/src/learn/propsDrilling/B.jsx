import React from "react";
import C from "./C";

function B(props) {
  return <div>
    <C name={props.name}></C>
  </div>;
}

export default B;
