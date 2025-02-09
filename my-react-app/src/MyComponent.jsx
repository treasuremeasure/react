import React, {useState, useEffect} from "react"

function MyComponent() {

    const [count, setCount] = useState()

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add count</button>
        </>
    )
}
    
export default MyComponent