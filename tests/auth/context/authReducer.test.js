import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en authReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('debe llamar al login y autenticar el usuario', () => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: 'Bruno Ramos'
      }
    }
    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })

  test('debe de borrar el usuario y logged en false', () => {
    const state = {
      logged: true,
      user: { id: 'ABC', name: 'Bruno Ramos' }
    }
    const action = {
      type: types.logout
    }
    const newState = authReducer(state, action)
    expect(newState).toEqual({
      logged: false
    })
  })
})
