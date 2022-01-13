import { useState, useEffect, useRef } from "react";

const TodoForm = props => {
    const [ input, setInput ] = useState(props.edit ? props.edit.value : '');
    
    const focus = useRef(null);
    
    useEffect(() => {
        focus.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }

    return ( 
        <>
        <section className="todo">
            <form onSubmit={ handleSubmit } className="todo_form">
                { props.edit ? (
                    <>
                        <input onChange={ handleChange } ref={ focus } type="text" placeholder="Update your item" value={ input } name='text' className="todo_form__input input_update" />
                        <button className="todo_form__button button_update">Update</button>
                    </>
                ) : ( 
                <>
                    <input onChange={ handleChange } ref={ focus } type="text" placeholder="Add a to do" value={ input } name='text' className="todo_form__input" />
                    <button className="todo_form__button">Add</button>
                </>
                )}
            </form>
        </section>
        </>
     );
}
 
export default TodoForm;