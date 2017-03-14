import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from './actions/filter'

const FilterLink = ({ filter, dispatch, children }) => {
  if (children === filter) {
    return (<span>{children}</span>)
  } else {
    return (
      <a
        href={`#${children}`}
        onClick={ () => dispatch(setFilter(children)) }
      >
       {children}
      </a>
    )
  }
}

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

export default connect(mapStateToProps)(FilterLink);
