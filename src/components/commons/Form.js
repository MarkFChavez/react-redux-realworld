import React from 'react'
import PropTypes from 'prop-types'

const Form = props => (
  <form className={`ui ${props.loading ? 'loading' : ''} huge form`} onSubmit={props.onSubmit}>
    {props.children}
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool
}

export default Form