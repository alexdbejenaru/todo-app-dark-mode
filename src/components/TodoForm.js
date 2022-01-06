import { useState, useEffect, useRef } from "react";

const TodoForm = ( { onSubmit } ) => {
    const [ input, setInput ] = useState('');
    
    const focus = useRef(null);
    
    useEffect(() => {
        focus.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }

    return ( 
        <>
        <section className="todo">
            <form onSubmit={ handleSubmit } className="todo_form">
                <input onChange={ handleChange } ref={ focus } type="text" placeholder="Add a to do" value={ input } name='text' className="todo_form__input" />
                <button className="todo_form__button">Add to do</button>
            </form>
        </section>
        </>
     );
}
 
export default TodoForm;