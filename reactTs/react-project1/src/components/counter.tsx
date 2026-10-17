import { useState } from "react";

export function Counter(){
const [count, setCount] = useState(0)

    return(
        <>
        <div>
        <p>cups orderd: {count}</p>
        <button onClick={() =>setCount((c) => c + 1 )}>order one more</button>
        </div>
        </>
    )
}