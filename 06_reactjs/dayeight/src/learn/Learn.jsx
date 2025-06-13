import React from "react";
import DarkModeLightMode from "./useState/darkandlightmode"
import AllCounterEffect from "./useEffect/AllCounter";
import ColorPicker from "./useRef/ColorPicker";
import SliderPage from "./useReducer/slider";
import UseStateSlider from "./useState/UseStateSlider";

function Learn() {
  return <div>
    <AllCounterEffect />
    <DarkModeLightMode />
    <ColorPicker />
    <SliderPage />
    <UseStateSlider />
  </div>;
}

export default Learn;
