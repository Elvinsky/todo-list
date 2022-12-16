import React, {useCallback, useEffect, useState} from 'react';
import Todo from './Todo';
import './style.css';
import TodoCounter from './TodoCounter';
import {generateTodos} from './utils/generate-todos';
import useInputValue from '../hooks/useInputValue';
function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setTodos(generateTodos(500));
        }, 500);
    }, []);
    const [name, handleSetName, setName] = useInputValue();
    const handleAddTodo = () => {
        if (name.trim() === '') {
            alert('You have to enter name for todo');
            return;
        } else if (isUnique()) {
            const todo = {
                name: name,
                done: false,
                id: Date.now().toString(),
            };
            setName('');
            setTodos([todo].concat(todos));
        }
    };
    const handleSetDone = useCallback((done, id) => {
        setTodos((currentTodos) => {
            currentTodos.map((todo) =>
                todo.id === id ? {...todo, done} : todo
            );
        });
    }, []);
    const handleDelete = (name) => {
        setTodos(todos.filter((todo) => todo.name !== name));
    };
    const isUnique = () => {
        let flag = true;
        todos.forEach((todo) => {
            if (todo.name === name) {
                alert('There is already such todo');
                setName('');
                flag = false;
            }
        });
        return flag;
    };
    const count = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="wrapper">
            <TodoCounter count={count} done={doneCount} />
            <div className="input-wrap">
                <input value={name} onChange={handleSetName} />
                <button onClick={handleAddTodo}>Submit</button>
            </div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    done={todo.done}
                    onDone={handleSetDone}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}
export default React.memo(App);
