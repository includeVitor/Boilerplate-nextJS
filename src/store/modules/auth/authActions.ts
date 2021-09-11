import { actions, SignInAction, SignOutAction } from './'
import { userType } from './authTypes'

const sign_in = (user: userType): SignInAction => ({
    type: actions.sign_in,
    payload: user
})

const sign_out = (): SignOutAction => ({
    type: actions.sign_out
})

export { sign_in, sign_out }
