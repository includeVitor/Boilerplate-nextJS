import Document, { Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class AppDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>{/*<link rel="icon" href="/favicon.ico" />*/}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

AppDocument.getInitialProps = async ctx => {
    const styledSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props =>
                    styledSheet.collectStyles(<App {...props} />)
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styledSheet.getStyleElement()}
                </>
            )
        }
    } finally {
        styledSheet.seal()
    }
}

export default AppDocument
