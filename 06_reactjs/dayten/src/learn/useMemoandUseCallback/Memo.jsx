import { useMemo, useState, useCallback } from "react";
function Memo() {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(0);

    const memo = useMemo(()=>{
        console.log("hello you have become famous now");
        return like >= 5 ? "famous" : "keep going";
    },[like]);
    const memo2 = useCallback(()=>{
        setLike((prev) => prev + 1);
    }, [setLike]);

    return <div className="bg-red-500 text-white container mx-auto ">
        <div className="text-3xl font-bold">
            <h1>Count: {count}</h1>
            <h1>Like: {like}</h1>
            <h1>{memo}</h1>
        </div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={memo2}>Like</button>
    </div>;
}


export default Memo;
