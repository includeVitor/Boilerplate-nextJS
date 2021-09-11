import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@store/index'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

export const useAppDispatch = (): Dispatch<AnyAction> =>
    useDispatch<AppDispatch>()
