import { sign_in } from './'
import { Dispatch, SetStateAction } from 'react'
import { AppDispatch } from '@store/index'
import { LoginUser, StateProps } from '@utils/auth/login/types'

const loginUser =
    (user: LoginUser, setState: Dispatch<SetStateAction<StateProps>>) =>
    async (dispatch: AppDispatch): Promise<void> => {
        if (user.login === 'teste')
            setState(prev => ({
                ...prev,
                loginError: 'Usuário ou senha incorretos'
            }))
        else dispatch(sign_in({ id: 'guid1', name: user.login }))
    }

export { loginUser }
