import React, { useRef } from "react";

import './NewTodo.css'

interface newTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<newTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value // we know how our code works that this will never be null because it will only be called on submit
    props.onAddTodo(enteredText)
  }

  return (
    <form action="" onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button>ADD TODO</button>
    </form>
  )
}

export default NewTodo