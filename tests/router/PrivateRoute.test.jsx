import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PrivateRoute } from '../../src/router/PrivateRoute'

describe('Pruebas en <PrivateRoute />', () => {
  test('debe de mostrar el children si esta autenticado', () => {
    global.Storage.prototype.setItem = jest.fn()
    const contextValue = {
      logged: true,
      use: {
        name: 'Bruno Ramos',
        id: 'ABC'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Ruta Privada')).toBeTruthy()
    expect(window.localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
  })
})
