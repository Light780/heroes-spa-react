import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../src/auth/context/AuthContext'
import { Navbar } from '../../../src/ui'

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}))

describe('Pruebas en el <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 'ABC',
      name: 'Bruno Ramos'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks())

  test('debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getAllByText(contextValue.user.name)).toBeTruthy()
  })

  test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalledWith('login', { replace: true })
  })
})
