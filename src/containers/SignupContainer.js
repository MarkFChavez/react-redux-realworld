import React, { Component } from 'react'
import Form from '../components/commons/Form'
import Field from '../components/commons/FormField'

class SignupContainer extends Component {

  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    console.log('submitted')
  }

  render () {
    return (
      <div className='ui text container'>
        <div className='ui segment'>
          <center>
            <h1>
              <i className='add user icon'></i> Sign up
            </h1>
          </center>

          <Form onSubmit={this.onSubmit}>
            <Field name='email' type='text' placeholder='Email address' icon='mail' />
            <Field name='password' type='password' placeholder='Your password' icon='lock' />
            <Field name='confirm_password' type='password' placeholder='Confirm your password' icon='lock' />

            <button className='ui green huge button' type='submit'>Submit</button>
          </Form>
        </div>
      </div>
    )
  }

}

export default SignupContainer