import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1em' }}>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) { return; }

        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input type="text"
               placeholder="do laundry..."
               style={{ display: 'block' }}
               ref={node => {
                  input = node;
                }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;