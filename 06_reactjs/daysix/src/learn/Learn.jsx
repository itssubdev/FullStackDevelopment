import React from "react";
import DarkModeLightMode from "./useState/darkandlightmode"
import AllCounterEffect from "./useEffect/AllCounter";
import ColorPicker from "./useRef/ColorPicker";

function Learn() {
  return <div>
    <AllCounterEffect />
    <DarkModeLightMode />
    <ColorPicker />
  </div>;
}

export default Learn;
