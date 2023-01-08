import { types } from '../../../src/auth/types/types'

describe('Pruebas en "Types"', () => {
  test('debe de regresar estos types', () => {
    expect(types).toEqual(
      {
        login: expect.any(String),
        logout: expect.any(String)
      }
    )
  })
})
