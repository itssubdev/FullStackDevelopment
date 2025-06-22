import React, { useState } from "react";

function DarkModeLightMode() {
    let [state, setState] = useState(true)
    function Mode (){
        setState(!state)
    }
  return <div>
    {state ?
    <>
        <button className="bg-black text-white px-4 py-2 rounder-md" onClick={Mode}>Dark Mode</button>
    </>:
    <>
    <button className="bg-red-100 text-white px-4 py-2 rounder-md" onClick={Mode}>light Mode</button> 
    </>}
  </div>;
}

export default DarkModeLightMode;
