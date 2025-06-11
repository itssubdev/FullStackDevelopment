import React from "react";

function ColorPicker() {
  return <div>
    
    <div className= "h-[400px] w-[400px] border-2 border-black">

    </div>
    <div className="flex gap-2 items-center justify-center">
        <div className="h-[50px] w-[50px] bg-red-500"></div>
        <div className="h-[50px] w-[50px] bg-green-500"></div>
        <div className="h-[50px] w-[50px] bg-yellow-500"></div>
        <div className="h-[50px] w-[50px] bg-blue-500"></div>
    </div>
  </div>;
}

export default ColorPicker;
