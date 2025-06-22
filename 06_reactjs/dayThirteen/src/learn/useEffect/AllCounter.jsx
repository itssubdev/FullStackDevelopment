import { useEffect, useState } from "react";

function AllCounterEffect() {
    let [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log("hello my name is shishir bhadnari");
        console.log("count" , count);
        console.log("setCount", setCount);
    },[count])
    
    function Add(){
        setCount(count+1)
    }
    function Sub(){
        setCount(count-1)
    }
    function Reset(){
        setCount(count=0)
    }
    return <div>
        <button onClick={Add}>+</button>
        <h1>{count}</h1>
        <button onClick={Sub}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>;
}

export default AllCounterEffect;
