import React from 'react'
import LoginForm from '../../components/loginForm'

const LoginPage = ({setIsAuthenticated}) => {
    const userAdmin = {
        email: 'roku@roku.com',
        password: 'roku'
    }
  return (
    <div>
        <LoginForm 
            userAdmin={userAdmin} 
            authUser={setIsAuthenticated}
        />
    </div>
  )
}

export default LoginPage