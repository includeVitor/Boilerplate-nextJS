// import { useAppSelector } from '@lib/hooks'
// import { sign_in } from '@store/modules/auth'
// import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { ComponentType, useEffect, useState, ReactNode } from 'react'

const Noop = ({ children }: { children: ReactNode }): JSX.Element => (
    <>{children}</>
)

export const withAuth = (
    Component: ComponentType
): ((props: any) => JSX.Element | boolean | null) => {
    const Layout = (Component as any).Layout || Noop
    return (props: any) => {
        if (typeof window !== 'undefined') {
            const Router = useRouter()
            // const dispatch = useDispatch()
            // const user = useAppSelector(state => state.auth.user)
            const [mounted, setMounted] = useState<boolean>(false)
            const { 'nexth-auth.token': token } = parseCookies()

            if (!token) {
                Router.replace('/login')
                return null
            }

            // deve verificar se o token é um JWT valido ?

            // if (!user) {
            //     dispatch(
            //         sign_in({
            //             id: 1,
            //             name: 'user',
            //             email: 'user@test.com'
            //         })
            //     )
            // }

            useEffect(() => {
                setMounted(true)
                return () => setMounted(false)
            }, [])

            return (
                mounted && (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            )
        }

        return null
    }
}
