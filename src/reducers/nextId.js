const nextId = (state = 0, action) => {
  switch ( action.type ) {
    case 'INC_ID':
      return ++state
    default: 
      return state
  }
}

export default nextId;
