import React, { Component } from 'react'
import Form from '../components/commons/Form'
import FormField from '../components/commons/FormField'
import FormFooter from '../components/commons/FormFooter'
import { Link } from 'react-router-dom'

class SigninContainer extends Component {

  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    console.log('form submitted')
  }

  render () {
    return (
      <div className='ui text container'>
        <div className='ui segment'>
          <center>
            <h1>
              <i className='send icon'></i> Sign in
            </h1>
          </center>

          <Form onSubmit={this.onSubmit}>
            <FormField name='email' type='text' placeholder='Email address' icon='mail' />
            <FormField name='password' type='password' placeholder='Your password' icon='lock' />

            <FormFooter>
              <button className='ui green button' type='submit'>Submit</button>
              <div className='or'></div>
              <Link to='/signup' className='ui blue button'>New account</Link>
            </FormFooter>
          </Form>
        </div>
      </div>
    )
  }

}

export default SigninContainer