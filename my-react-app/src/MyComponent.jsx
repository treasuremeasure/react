import React, {useState} from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest")
    const [age, incrementAge] = useState(22)
    const [isEmployed, setisEmployed] = useState(false)

    const handleSetName = () => {
        setName("Riza")
    }

    const HandleSetAge = () => {
        incrementAge(age + 1)
    }

    const HandlesetisImplyed = () => {
        setisEmployed(!isEmployed)
    }


    return (
        <div>
            {name} is a studen. He is {age} years old and he is {isEmployed ? "is employed" : "is not employed"}<br></br>
            <br></br><button onClick={handleSetName}>Set Name</button>
            <br></br><button onClick={HandleSetAge}>Set Age</button>
            <br></br><button onClick={HandlesetisImplyed}>Set isEmployed</button>
        </div>
    )
}

export default MyComponent