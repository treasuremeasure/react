import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const IncreaseCount = () => {
        setCount(count + 1)
        setCount(count + 1)
    }
 
    const DecreaseCount = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }
    
    return (
        <div>
            Count: {count}<br></br> <br></br>
            <button onClick={IncreaseCount}>Increase</button><br></br> <br></br>
            <button onClick={DecreaseCount}>Decrease</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter