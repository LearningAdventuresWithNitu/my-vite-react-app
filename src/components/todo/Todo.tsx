import './Todo.css';

function Todo() {
    // for now using static list to render
    const tasks = ['Complete Assignment 2', 'Grocery', 'Taxes'];

    return(
    <div>
        <h1>My Todo List</h1>
        <div>
            <input type="text" placeholder="Add a new task"></input>
            <button type="submit">Add </button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default Todo;