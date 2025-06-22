import {useState, useMemo, useCallback} from "react";

function ExpensiveComponents({onClick}) {
    console.log("ExpensiveComponents rerender...");
    return <>
        <button onClick={onClick}>ExpensiveComponents</button>
    </>;
}
// rafc

export const WithCounterApp = () => {
 const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);
   
       const handleClick = useCallback(() => {
           console.log("handleClick called");
       }, [])
   
   
       const expensiveVAlue = useMemo(() => {
           console.log("expensiveVAlue called");
           let total = 0;
           for(let i = 0; i<1000000000; i++){
               total += i
           }
           return total
       }, [])
       
     return <div>
        <h1>With UseMemo and useCallback</h1>
         <ExpensiveComponents onClick={handleClick}/>
         <button onClick ={() => setCount((prev) => prev + 1)}>increment</button>
         <h1>Count: {count}</h1>
         <h1>otherCount: {otherCount}</h1>
         <p>{expensiveVAlue}</p>
         <button onClick={() => setOtherCount((prev) => prev + 1)}>INcrement for other</button>
     </div>;
};

