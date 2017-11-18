import React from 'react'
import PropTypes from 'prop-types'

const FormFooter = props => (
  <div className='ui centered grid'>
    <div className='row'>
      <div className='ui huge buttons'>
        {props.children}
      </div>
    </div>
  </div>
)

FormFooter.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormFooter