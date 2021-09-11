import ThemeProvider from '@lib/theme'
import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement, FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '@store/index'

const Providers: FC = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
        </Provider>
    )
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
