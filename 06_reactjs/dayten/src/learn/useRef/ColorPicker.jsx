import { useRef } from "react";
// useRef -> use to muniplate the dom element
function ColorPicker() {
    const abc = useRef(null);
    function ChangeColor(color){
        abc.current.style.backgroundColor = color
    }
  return <div>
    <div className= "h-[400px] w-[400px] border-2 border-black" ref={abc}>
    </div>
    <div className="flex gap-2 items-center justify-center">
        <div className="h-[50px] w-[50px] bg-red-500" onClick={()=> ChangeColor("red")}></div>
        <div className="h-[50px] w-[50px] bg-green-500" onClick={()=> ChangeColor("green")}></div>
        <div className="h-[50px] w-[50px] bg-yellow-500" onClick={()=> ChangeColor("yellow")}></div>
        <div className="h-[50px] w-[50px] bg-blue-500" onClick={()=> ChangeColor("blue")}></div>
    </div>
  </div>;
}

export default ColorPicker;
