import React, {useState} from 'react'

function Counter() {
    const [cars, setCars] = useState();
    const [carYear, setYear] = useState(new Date().getFullYear())
    const [carMake, setMake] = useState();
    const [carModel, setModel] = useState();


    function handleCarAddition() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
        }

        setCars(c => [...c, newCar]);

        setCarYear(new Date)
    }

    return (
        <div>
            <h1>List of Car objects</h1>
            {cars.map((cars, index) => <li key={index}>{car}</li>)}
            <input type="number" placeholder='Enter the year of the car'></input>
            <input type="text" placeholder='Enter the make of the car'></input>
            <input type="text" placeholder='Enter the model of the car'></input><br></br>
            <button>Add car</button>
        </div>
    )
}

export default Counter