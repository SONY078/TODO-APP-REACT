import React, { useState } from 'react';
// import TodoForm from './TodoForm';
import TodoForm from './ADD';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    due:''
  });

  const submitUpdate = (value,due) => {
    updateTodo(edit.id, value,due);
    setEdit({
      id: null,
      value: '',
      due:''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
 

  return todos.map((todo, index) => (
    
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index} 
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} text-hover='click on the text to complete or incomplete' id='texthover'>
        {todo.text} 
      </div>
      <div  onClick={() => completeTodo(todo.id)} text-hover='click on the text to complete or undo' id='texthover'>
      {todo.date}
      </div>
      <div className='icons'>
      <span  text-hover='click to remove' id='texthover'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon' 
        />
        </span>
        <span text-hover='click to edit' id='texthover'>
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text , due : todo.date})}
          className='edit-icon' 
        />
      </span>
    </div>
    </div>
  ));
};

export default Todo;