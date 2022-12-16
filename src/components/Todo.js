import React, {useState} from 'react';
import './Todo.css';

function Todo({name, id, onDone, onDelete, done}) {
    const [status, setStatus] = useState(false);
    const handleCheck = (e) => {
        onDone(e.target.checked, id);
    };
    const handleMouseEnter = () => {
        setStatus(true);
    };
    const handleMouseLeave = () => {
        setStatus(false);
    };
    const handleDelete = () => {
        onDelete(id);
    };
    return (
        <div
            className={done ? 'done todo-wrapper' : 'todo-wrapper'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <input
                className="check"
                type="checkbox"
                checked={done}
                onChange={handleCheck}
            />
            <span>{name}</span>
            <button
                className={status ? 'dlt_button hovered' : 'dlt_button'}
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}
export default React.memo(Todo);
