import { useEffect, useRef, useState } from 'react'
import api, { cancelationToken } from '@service/index'

export const useRequest = <D, E = undefined>(
    url: string
): {
    data: D | undefined
    error: E | undefined
} => {
    const [data, setData] = useState<D | undefined>(undefined)
    const [error, setError] = useState<E | undefined>(undefined)
    const source = useRef(cancelationToken.source())

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data: response } = await api.get<D>(url, {
                    cancelToken: source.current.token
                })
                setData(response)
            } catch (error) {
                const { response } = error

                if (response) {
                    setError(response)
                }
            }
        }

        loadData()

        return () => source.current.cancel('the user canceled the request')
    }, [url])

    return { data, error }
}
