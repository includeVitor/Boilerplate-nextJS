import { actions, authType, SignInAction, SignOutAction } from '.'

const initialState: authType = {
    isAuthenticated: false,
    user: null
}

export const authReducer = (
    state: authType = initialState,
    action: SignInAction | SignOutAction
): authType => {
    switch (action.type) {
        case actions.sign_in:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }

        case actions.sign_out:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}
