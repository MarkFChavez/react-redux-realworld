import React from 'react'
import PropTypes from 'prop-types'

const Form = props => (
  <form className='ui huge form' onSubmit={props.onSubmit}>
    {props.children}
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Form