import { authReducer, sign_in, sign_out } from '@store/modules/auth'

describe('authReducer', () => {
    it('should sign_in an user', () => {
        //arrange - {isAuthenticated: false, user: null }
        //act - sign_in({ id: 'guid1', name: 'Vitor' })
        //assert - {isAuthenticated: true, user: { id: 'guid1', name: 'Vitor' } }

        const mockUser = { id: 'guid1', name: 'Vitor' }
        const initialState = { isAuthenticated: false, user: null }
        const state = authReducer(initialState, sign_in(mockUser))
        expect(state.isAuthenticated).toEqual(true)
        expect(state.user).toEqual(mockUser)
    })

    it('should sign_out an user', () => {
        //arrange - {isAuthenticated: true, user: { id: 'guid1', name: 'Vitor' } }
        //act - sign_out()
        //assert - {isAuthenticated: false, user: null }

        const initialState = {
            isAuthenticated: true,
            user: { id: 'guid1', name: 'Vitor' }
        }
        const state = authReducer(initialState, sign_out())
        expect(state.isAuthenticated).toBe(false)
        expect(state.user).toBe(null)
    })
})
