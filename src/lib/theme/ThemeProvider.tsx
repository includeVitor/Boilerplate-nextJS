import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyles } from './global'
import { ReactNode } from 'react'

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider
