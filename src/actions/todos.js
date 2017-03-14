export const addTodo = (todo) => {
  return { type: 'ADD_TODO', todo }
}

export const toggleTodo = (id) => {
  return { type: 'TOGGLE_TODO', id }
}

