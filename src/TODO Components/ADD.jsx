import React, { useState, useEffect, useRef } from 'react';

import dateFormat from 'dateformat';
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [due, setDue] = useState(dateFormat(new Date(), "yyyy-mm-dd"));
  const inputRef = useRef(null);



  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const handleChange = e => {
    setInput(e.target.value);
  };
  const dateChange = e => {
    setDue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date:due
    });
    setInput('');
    setDue('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          /><br/><br />
          <input type="date" name="date" id="" value={due} onChange={dateChange} className='input-date'/><br /><br />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo list'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          /><br/><br />
          <input type="date" name="date" id="" value={due} onChange={dateChange} className='input-date'/><br /><br />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}

      
    </form>
  );
}

export default TodoForm;