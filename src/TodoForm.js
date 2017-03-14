import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/todos'
import { incId } from './actions/nextId'

const TodoForm = ({ dispatch, nextId }) => {
  let input;

  return (
    <div>
      <h3>Add A Todo</h3>
      <form
        onSubmit={ e => {
          e.preventDefault();
          let todo = {
            name: input.value,
            id: nextId,
            complete: false
          }
          dispatch(addTodo(todo))
          dispatch(incId());
          input.value = null;
        }}
      >
        <input ref={ n => input = n } />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(TodoForm);
