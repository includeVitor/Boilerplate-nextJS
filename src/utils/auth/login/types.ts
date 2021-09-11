interface LoginUser {
    login: string
    password: string
}

interface StateProps extends LoginUser {
    loginError: string
    passwordError: string
}

export type { LoginUser, StateProps }
