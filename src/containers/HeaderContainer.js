import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NavigationLinks from '../components/NavigationLinks'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/2.6/node_modules/redux';
import { signout } from '../actions'
import { withRouter } from 'react-router-dom'

class HeaderContainer extends Component {

  constructor (props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout () {
    this.props.signout(this.props.history)
  }

  render () {
    return (
      <div className='ui stackable menu'>
        <div className='item'>
          <Link to='/' className='Header__text'>
            <h1> {this.props.title} </h1>
          </Link>
        </div>

        <NavigationLinks isLoggedIn={this.props.isLoggedIn} onLogout={this.onLogout} />
      </div>
    )
  }

}

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool
}

const stateToProps = state => (
  { isLoggedIn: state.auth.isLoggedIn }
)

const dispatchToProps = dispatch => (
  bindActionCreators({ signout }, dispatch)
)

export default connect(stateToProps, dispatchToProps)(HeaderContainer)