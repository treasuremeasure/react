import React, {useState} from 'react'

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear())
    const [carMake, setMake] = useState();
    const [carModel, setModel] = useState();


    function handleCarAddition() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
        }

        setCars(c => [...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(event) {
        setCarYear(event.target.value)
    }

    function handleMakeChange(event) {
        setMake(event.target.value)
    }

    function handleModelChange(event) {
        setModel(event.target.value)
    }



    return (
        <div>
            <h1>List of Car objects</h1>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} placeholder='Enter the year of the car'></input><br></br>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter the make of the car'></input><br></br>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter the model of the car'></input><br></br>
            <button onClick={handleCarAddition}>Add car</button>
        </div>
    )
}

export default MyComponent
