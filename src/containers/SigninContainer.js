import React, { Component } from 'react'
import Form from '../components/commons/Form'

class SigninContainer extends Component {

  constructor (props) {
    super(props)
    this.onSubmit.bind(this)
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
              <i className="code icon"></i> Sign in
            </h1>
          </center>

          <Form onSubmit={this.onSubmit}>
            <div className="field">
              <label>Email</label>
              <input type="text" name="email" placeholder="Email address" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Your password" />
            </div>
            <button className="ui green huge button" type="submit">Submit</button>
          </Form>
        </div>
      </div>
    )
  }

}

export default SigninContainer