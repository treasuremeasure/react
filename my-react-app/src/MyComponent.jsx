import React, {useState} from 'react'

function MyComponent() {
    const [name, setName] = useState()

    function handleNameChange() {
        setName(event.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p> 
        </div>
    )
}

export default MyComponent