import React from 'react'
import PropTypes from 'prop-types'
import { capitalize } from 'lodash'

const FormField = props => (
  <div className='field'>
    <label>
      <i className={`${props.icon} icon`}></i> {capitalize(props.name)}
    </label>
    <input type={props.type} name={props.name} placeholder={props.placeholder} />
  </div>
)

FormField.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default FormField