import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

function CounterProvider({children}) {
    const [count, SetCount] = useState(0)
    const increment = () => {
        SetCount(count + 1)
    }
    const decrement = () => {
        SetCount(count - 1)
    }
  return (
    <CounterContext.Provider value={{count, increment, decrement}} >
        {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
