import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const onLogin = () => {
    const lastPath = window.localStorage.getItem('lastPath') || '/'
    login('Bruno Ramos')
    navigate(lastPath, { replace: true })
  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button type='button' className='btn btn-primary' onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
