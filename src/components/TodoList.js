import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [ todos, setTodos ] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [ todo, ...todos ];
    
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (todoId) => {
        const removeArr = [...todos].filter(todo => todo.id !== todoId)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if ( todo.id === id ) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    
    return ( 
        <>
            <div className="todo-list">
                <h1 className="todo-list_title">Plan your time!</h1>
                <TodoForm onSubmit={ addTodo }/>
                <Todo removeTodo={ removeTodo } todos={ todos } updateTodo= { updateTodo } completeTodo={ completeTodo }/>
            </div>
        </>
     );
}
 
export default TodoList;