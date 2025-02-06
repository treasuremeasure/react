import React, {useState} from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
    const [newTask, setNewTask] = useState(``);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        setTasks(prevTasks => [...prevTasks, newTask ] )
    }

    function deleteTask(index) {

    }

    function toMoveTaskUp(index) {

    }

    function toMoveTaskDown(index) {

    }

    return(<div className='toDoList'>
        <h1>To-Do-List</h1>
        <div className="toDoList">
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button className="addButton" onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span> 
                    <button className="deleteBtn" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="moveBtn" onClick={() => toMoveTaskUp(index)}>👆</button>
                    <button className="moveBtn" onClick={() => toMoveTaskUp(index)}>👇</button>
                </li>
            )}
        </ol>
    </div>);
}

export default ToDoList