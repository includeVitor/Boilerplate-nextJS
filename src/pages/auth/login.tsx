import { FormEvent, useState, ChangeEvent } from 'react'
import { Container, Form, SpanError } from '@utils/auth/login/styles'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@lib/hooks'
import { loginUser } from '@store/modules/auth'
import { StateProps } from '@utils/auth/login/types'

const Login = (): JSX.Element => {
    const dispatch = useDispatch()
    const auth = useAppSelector(state => state.auth)

    const [state, setState] = useState<StateProps>({
        login: '',
        password: '',
        loginError: '',
        passwordError: ''
    })
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target
        setState(prev => ({ ...prev, [input.name]: input.value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            dispatch(loginUser(state, setState))
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div>loading...</div>

    if (auth.isAuthenticated)
        return (
            <Container>
                <h2>Bem vindo, {auth.user?.name}</h2>
            </Container>
        )

    return (
        <Container>
            <Form noValidate onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input
                    name="login"
                    onChange={handleChange}
                    value={state.login}
                />
                {state.loginError && <SpanError>{state.loginError}</SpanError>}

                <input
                    name="password"
                    onChange={handleChange}
                    value={state.password}
                />

                {state.passwordError && (
                    <SpanError>{state.passwordError}</SpanError>
                )}

                <button type="submit">Entrar</button>
            </Form>
        </Container>
    )
}

export default Login
