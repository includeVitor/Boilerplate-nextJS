import api from '@service/index'
import { AxiosInstance } from 'axios'
import { NextApiRequest, NextPageContext } from 'next'
import { parseCookies } from 'nookies'

const getAPI = (
    ctx:
        | Pick<NextPageContext, 'req'>
        | {
              req: NextApiRequest
          }
        | null
        | undefined
): AxiosInstance => {
    const { 'nexth-auth.token': token } = parseCookies(ctx)

    if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`

    return api
}

export { getAPI }
