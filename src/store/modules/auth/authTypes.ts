import { Action } from 'redux'

export type userType = {
    id: string
    name: string
}

export type authType = {
    isAuthenticated: boolean
    user: userType | null
}

export enum actions {
    sign_in = 'auth/sign_in',
    sign_out = 'auth/sign_out'
}

export interface SignInAction extends Action<typeof actions.sign_in> {
    payload: userType
}
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface SignOutAction extends Action<typeof actions.sign_out> {}
