import React, { Component } from 'react'
import Form from '../components/commons/Form'
import FormField from '../components/commons/FormField'
import FormFooter from '../components/commons/FormFooter'
import { Link } from 'react-router-dom'

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
              <i className='send icon'></i> Sign up
            </h1>
          </center>

          <Form onSubmit={this.onSubmit}>
            <FormField name='email' type='text' placeholder='Email address' icon='mail' />
            <FormField name='password' type='password' placeholder='Your password' icon='lock' />
            <FormField name='confirm_password' type='password' placeholder='Confirm your password' icon='lock' />

            <FormFooter>
              <button className='ui green button' type='submit'>Submit</button>
              <div className='or'></div>
              <Link to='/signin' className='ui blue button'>I already have an account</Link>
            </FormFooter>
          </Form>
        </div>
      </div>
    )
  }

}

export default SignupContainer