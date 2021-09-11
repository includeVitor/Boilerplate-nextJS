/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { themeStyled } from '@theme'
export type Theme = typeof themeStyled

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
