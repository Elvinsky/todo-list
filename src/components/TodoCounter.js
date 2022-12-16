import './TodoCounter.css';
function TodoCounter({count, done}) {
    return (
        <div className="todostat-wrapper">
            <p>Count: {count}</p>
            <p>Completed: {done}</p>
            <p>Left: {count - done}</p>
        </div>
    );
}

export default TodoCounter;
