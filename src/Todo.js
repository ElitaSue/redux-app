import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './actions/todos';

const Todo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={ () => dispatch(toggleTodo(id)) }
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {name}
  </li>
)

export default connect()(Todo);
