import {useState,} from "react";

function ExpensiveComponentss({onClick}) {
    console.log("ExpensiveComponents rerender...");
    return <>
        <button onClick={onClick}>ExpensiveComponents</button>
    </>;
}


function WithOutCounterApp() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    const handleClick = () => {
        console.log("handleClick called");
    }


    const expensiveVAlue = () =>{
        console.log("expensiveVAlue called");
        let total = 0;
        for(let i = 0; i<1000000000; i++){
            total += i
        }
        return total
        
    }
    
  return <div>
      <ExpensiveComponentss onClick={handleClick}/>
      <button onClick ={() => setCount((prev) => prev + 1)}>increment</button>
      <h1>Count: {count}</h1>
      <h1>otherCount: {otherCount}</h1>
      <p>{expensiveVAlue()}</p>
      <button onClick={() => setOtherCount((prev) => prev + 1)}>INcrement for other</button>
  </div>;
}

export default WithOutCounterApp;
