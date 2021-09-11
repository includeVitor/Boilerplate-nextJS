import { ComponentType, ReactNode } from 'react'

const Noop = ({ children }: { children: ReactNode }): JSX.Element => (
    <>{children}</>
)

export function withAuthProps(
    Component: ComponentType
): ({ data }: { data: any }) => JSX.Element {
    const Layout = (Component as any).Layout || Noop

    return ({ data }: { data: any }) => {
        return (
            <Layout>
                <Component {...data.props} />
            </Layout>
        )
    }
}
