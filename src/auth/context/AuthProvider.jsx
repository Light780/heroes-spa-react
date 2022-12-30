import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name
    }

    const action = {
      type: types.login,
      payload: user
    }

    window.localStorage.setItem('user', JSON.stringify(user))

    dispatch(action)
  }

  const logout = () => {
    const action = {
      type: types.logout
    }

    window.localStorage.removeItem('user')

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
