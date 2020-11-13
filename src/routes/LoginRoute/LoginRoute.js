import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <h4>Demo account credentials</h4>
        <hr />
        <h5>username: admin</h5>
        <h5>password: pass</h5>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    ) 
  }
}

export default LoginRoute
