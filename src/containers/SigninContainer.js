import React, { Component } from 'react'
import Form from '../components/commons/Form'
import FormField from '../components/commons/FormField'
import FormFooter from '../components/commons/FormFooter'
import { signin } from '../actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SigninContainer extends Component {

  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = { email: '', password: '' }
  }

  onSubmit (e) {
    e.preventDefault()
    const { email, password } = this.state
    this.props.signin(email, password)
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

          <Form loading={this.props.authLoading} onSubmit={this.onSubmit}>
            <FormField
              name='email'
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type='text'
              placeholder='Email address'
              icon='mail' />

            <FormField
              name='password'
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type='password'
              placeholder='Your password'
              icon='lock' />

            <FormFooter>
              <button className='ui green button' type='submit'>Submit</button>
              <div className='or'></div>
              <Link to='/signup' className='ui blue button'>
                Create a new account
              </Link>
            </FormFooter>
          </Form>
        </div>
      </div>
    )
  }

}

const stateToProps = ({ auth }) => (
  {
    isLoggedIn: auth.isLoggedIn,
    currentUser: auth.currentUser,
    authLoading: auth.authLoading
  }
)
const dispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)

export default connect(stateToProps, dispatchToProps)(SigninContainer)