import React from 'react'
import PropTypes from 'prop-types'
import { capitalize, replace } from 'lodash'

const sanitize = (string, target, term) => replace(capitalize(string), target, term)

const FormField = props => (
  <div className='field'>
    <label>
      <i className={`${props.icon} icon`}></i> {sanitize(props.name, '_', ' ')}
    </label>
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      />
  </div>
)

FormField.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default FormField