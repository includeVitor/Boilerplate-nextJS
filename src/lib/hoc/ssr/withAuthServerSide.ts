import { parseCookies } from 'nookies'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'

export function withAuthServerSideProps(
    getServerSidePropsFunc?: (
        context: GetServerSidePropsContext<ParsedUrlQuery>
    ) => Promise<GetServerSidePropsResult<any>>
): (context: GetServerSidePropsContext<ParsedUrlQuery>) => Promise<
    | {
          redirect: {
              destination: string
              permanent: boolean
          }
          props?: undefined
      }
    | {
          props: {
              data: GetServerSidePropsResult<any>
          }
      }
> {
    return async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
        const { 'nexth-auth.token': token } = parseCookies(context)

        //deve validar se o token é um JWT valido?
        if (!token) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: true
                }
            }
        }

        if (getServerSidePropsFunc) {
            return {
                props: {
                    data: await getServerSidePropsFunc(context)
                }
            }
        }

        return { props: { data: { props: {} } } }
    }
}
